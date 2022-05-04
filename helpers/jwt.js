const jwt = require('jsonwebtoken');
const config = require('../config');
const Response = require('../helpers/response');
const RefreshToken = require('../models/RefreshToken');

const signAccessToken = async (data) => {

    const payload = {
        ...data,
    };

    const token = await jwt.sign(payload, config.jwtSecret, {
        expiresIn: config.jwtExpiration
    });

    return token;
};


const verifyAccessToken = (req, res, next) => {

    let token = null;

    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');

        if (bearer[0] === 'Bearer' && bearer[1] !== '') {
            token = bearer[1];
        }
    }

    token = token || req.body.token || req.query.token;

    if (token) {
        jwt.verify(token, config.jwtSecret, (err, decoded) => {
            if (err) {
                const response = Response.make(401, 'Unauthorized', null);
                res.status(401).json(response);
            } else {
                req.decode = decoded;
                next();
            }
        })
    } else {
        const response = Response.make(401, 'Unauthorized', null);
        res.status(401).json(response);
    }
};



const signRefreshToken = async (user_id) => {

    let expiredAt = new Date();
    expiredAt.setSeconds(expiredAt.getSeconds() + config.jwtRefreshExpiration);

    const payload = {
        user_id,
    };

    const token = await jwt.sign(payload, config.jwtRefreshSecret, {
        expiresIn: config.jwtRefreshExpiration
    });

    await RefreshToken.updateOne({ user_id: user_id }, {
        token: token,
        expiry_date: expiredAt.getTime()
    },
        {
            upsert: true, setDefaultsOnInsert: true
        });


    return token;
};


const verifyRefreshToken = async (refresh_token) => {

    return await jwt.verify(refresh_token, config.jwtRefreshSecret, async (err, decoded) => {
        if (err) {
            const response = Response.make(401, 'Unauthorized', null);
            res.status(401).json(response);
        } else {
            const { user_id } = decoded;

            const user_token = await RefreshToken.find({ user_id: user_id });

            if (refresh_token === user_token[0].token) {
                return user_id;
            }

        }
    });
};


module.exports = {
    signAccessToken,
    signRefreshToken,
    verifyAccessToken,
    verifyRefreshToken
};