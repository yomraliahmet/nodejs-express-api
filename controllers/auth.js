const express = require('express');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/Users');
const Response = require('../helpers/response');

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
                .then((result) => {
                    if (!result) {
                        const response = Response.make(406, 'Authentication failed.', null);
                        arg.res.status(406).json(response);
                    } else {
                        const payload = { username };
                        const token = jwt.sign(payload, arg.req.app.get('api_secret_key'), {
                            expiresIn: "1 days"
                        });

                        const response = Response.make(200, 'Success', {
                            token: token
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

module.exports = {
    login
}