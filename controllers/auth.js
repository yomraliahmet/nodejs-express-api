const express = require('express');

const bcrypt = require('bcrypt');
const User = require('../models/Users');
const Response = require('../helpers/response');

const { signAccessToken, signRefreshToken, verifyRefreshToken } = require('../helpers/jwt');

// Auth login
function login(arg) {
    const { username, password } = arg.req.body;

    User.findOne({
        username
    }, (err, user) => {
        if (err) {
            throw err;
        }

        if (!user) {
            const response = Response.make(406, 'Authentication failed, user not found.', null);
            arg.res.status(406).json(response);
        } else {
            bcrypt.compare(password, user.password)
                .then(async (result) => {
                    if (!result) {
                        const response = Response.make(406, 'Authentication failed.', null);
                        arg.res.status(406).json(response);
                    } else {
                        const user_id = user._id;
                        const payload = { user_id };

                        const token = await signAccessToken(payload);
                        const refreshToken = await signRefreshToken(user._id);

                        const response = Response.make(200, 'Success', {
                            token: token,
                            refresh_token: refreshToken
                        });
                        arg.res.status(200).json(response);
                    }
                })
                .catch((err) => {
                    const response = Response.make(406, 'Authentication failed.', null);
                    arg.res.status(406).json(response);
                });
        }
    });
}


// Refresh Token
async function refreshToken(arg) {
    const { refresh_token } = arg.req.body;

    try {
		if (!refresh_token) {
            const response = Response.make(406, 'Authentication failed.', null);
            arg.res.status(406).json(response);
		}

		const user_id = await verifyRefreshToken(refresh_token);

        if(typeof user_id === 'undefined') {
            const response = Response.make(406, 'Authentication failed.', null);
            arg.res.status(406).json(response); 
        } else {

            const accessToken = await signAccessToken(user_id);
            const refreshToken = await signRefreshToken(user_id);

            const response = Response.make(200, 'Success', {
                token: accessToken,
                refresh_token: refreshToken
            });
            arg.res.status(200).json(response);
        }



	} catch (e) {
        const response = Response.make(406, 'Authentication failed.', null);
        arg.res.status(406).json(response);
	}
}

module.exports = {
    login,
    refreshToken
}