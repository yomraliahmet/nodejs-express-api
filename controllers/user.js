const express = require('express');
const bcrypt = require('bcrypt');

const User = require('../models/Users');
const Response = require('../helpers/response');

// Get all data.
function index(arg) {

    User.find({})
        .then((data) => {

            const newData = data.map((data) => {
                return {
                    id: data._id,
                    username: data.username,
                    first_name: data.first_name,
                    last_name: data.last_name,
                    city: data.city
                };
            });

            const response = Response.make(200, 'Success', newData);
            arg.res.status(200).json(response);

        }).catch((err) => {
            const response = Response.make(400, 'Bad Request', null);
            arg.res.status(400).json(response);
        });

}

// Add new record.
function store(arg) {

    const { username, password, first_name, last_name, city } = arg.req.body;

    // Record Exists
    User.findOne({
        username
    }, (err, user) => {
        if (err) { throw err; }

        if (user) {
            const response = Response.make(409, 'This record is available.', null);
            arg.res.status(409).json(response);
        } else {
            // Add record
            bcrypt.hash(password, 10)
                .then((hash) => {
                    const user = new User({
                        username,
                        password: hash,
                        first_name,
                        last_name,
                        city
                    });

                    const userPromise = user.save();
                    userPromise
                        .then((data) => {
                            const response = Response.make(200, 'Success', {
                                id: data._id,
                                username: data.username,
                                first_name: data.first_name,
                                last_name: data.last_name,
                                city: data.city
                            });
                            arg.res.status(200).json(response);
                        })
                        .catch((err) => {
                            const response = Response.make(400, 'Bad Request', null);
                            arg.res.status(400).json(response);
                        });

                })
                .catch((err) => {
                    const response = Response.make(400, 'Bad Request', null);
                    arg.res.status(400).json(response);
                });
        }
    });
}

// Get one record.
function show(arg) {
    const id = arg.req.params.id;

    User.findById(id)
        .then((data) => {
            if (!data) {
                const response = Response.make(404, 'User Not Found', null);
                arg.res.status(404).json(response);
            } else {
                const response = Response.make(200, 'Success', {
                    id: data._id,
                    username: data.username,
                    first_name: data.first_name,
                    last_name: data.last_name,
                    city: data.city
                });
                arg.res.status(200).json(response);
            }
        })
        .catch(() => {
            const response = Response.make(404, 'Not Found', null);
            arg.res.status(404).json(response);
        });
}

// Update a record
function update(arg) {
    const id = arg.req.params.id;
    const { product_code, name } = arg.req.body;

    User.findByIdAndUpdate(id, { product_code, name }, { new: true })
        .then((data) => {
            if (!data) {
                const response = Response.make(404, 'User Not Found', null);
                arg.res.status(404).json(response);
            } else {
                const response = Response.make(200, 'Success', {
                    id: data._id,
                    username: data.username,
                    first_name: data.first_name,
                    last_name: data.last_name,
                    city: data.city
                });
                arg.res.status(200).json(response);
            }
        })
        .catch((err) => {
            const response = Response.make(400, 'Bad Request', null);
            arg.res.status(400).json(response);
        })
}

// Delete a record.
function remove(arg) {
    const id = arg.req.params.id;

    User.findByIdAndRemove(id)
        .then((user) => {
            if (!user) {
                const response = Response.make(404, 'User Not Found', null);
                arg.res.status(404).json(response);
            } else {
                const response = Response.make(200, 'Success', null);
                arg.res.status(200).json(response);
            }
        })
        .catch((err) => {
            const response = Response.make(400, 'Bad Request', null);
            arg.res.status(400).json(response);
        })
}

module.exports = {
    index,
    store,
    show,
    update,
    remove
}