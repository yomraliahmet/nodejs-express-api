const jwt = require('jsonwebtoken');

const Response = require('../helpers/response');

module.exports = (req, res, next) => {

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
        jwt.verify(token, req.app.get('api_secret_key'), (err, decoded) => {
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
}