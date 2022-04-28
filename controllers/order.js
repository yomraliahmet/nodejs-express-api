const express = require('express');

const Order = require('../models/Orders');
const User = require('../models/Users');
const Product = require('../models/Products');
const Response = require('../helpers/response');

// Get all data.
function index(arg) {

    const username = arg.req.decode.username;

    User.findOne({ username })
        .then((user) => {

            Order.find({
                'user._id': user._id
            })
                .then((data) => {

                    const newData = data.map((data) => {
                        return {
                            id: data._id,
                            user: {
                                id: data.user._id,
                                username: data.user.username,
                                first_name: data.user.first_name,
                                last_name: data.user.last_name,
                                city: data.user.city
                            },
                            product: {
                                id: data.product._id,
                                product_code: data.product.product_code,
                                name: data.product.name
                            }
                        };
                    });

                    const response = Response.make(200, 'Success', newData);
                    arg.res.status(200).json(response);
                })
                .catch((err) => {
                    const response = Response.make(404, 'Order Not Found', null);
                    arg.res.status(400).json(response);
                });

        })
        .catch((err) => {
            const response = Response.make(404, 'User Not Found', null);
            arg.res.status(404).json(response);
        });
}

// Add new record.
function store(arg) {
    const username = arg.req.decode.username;
    const { product_id } = arg.req.body;

    const user = User.findOne({
        username
    });
    const product = Product.findById(product_id);

    Promise.all([user, product])
        .then((values) => {
            const user = values[0];
            const product = values[1];

            Order.findOne({
                user_id: user._id,
                product_id: product._id
            }, (err, order) => {
                if (order) {
                    const response = Response.make(409, 'This record is available.', null);
                    arg.res.status(409).json(response);
                } else {

                    const order = new Order({
                        user: {
                            _id: user._id,
                            username: user.username,
                            first_name: user.first_name,
                            last_name: user.last_name,
                            city: user.city
                        },
                        product: product
                    });

                    order.save()
                        .then((data) => {
                            const response = Response.make(200, 'Success', {
                                id: data._id,
                                user: {
                                    id: data.user._id,
                                    username: data.user.username,
                                    first_name: data.user.first_name,
                                    last_name: data.user.last_name,
                                    city: data.user.city
                                },
                                product: {
                                    id: data.product._id,
                                    product_code: data.product.product_code,
                                    name: data.product.name
                                }
                            });
                            arg.res.status(200).json(response);
                        })
                        .catch((err) => {
                            const response = Response.make(400, 'Bad Request', null);
                            arg.res.status(400).json(response);
                        });
                }
            });
        })
        .catch((err) => {
            const response = Response.make(400, 'Bad Request', null);
            arg.res.status(400).json(response);
        });
}

// Get one record.
function show(arg) {

    const username = arg.req.decode.username;
    const order_id = arg.req.params.id;

    User.findOne({ username })
        .then((user) => {

            Order.findOne({
                'user._id': user._id,
                '_id': order_id
            })
                .then((data) => {
                    const response = Response.make(200, 'Success', {
                        id: data._id,
                        user: {
                            id: data.user._id,
                            username: data.user.username,
                            first_name: data.user.first_name,
                            last_name: data.user.last_name,
                            city: data.user.city
                        },
                        product: {
                            id: data.product._id,
                            product_code: data.product.product_code,
                            name: data.product.name
                        }
                    });
                    arg.res.status(200).json(response);
                })
                .catch(() => {
                    const response = Response.make(404, 'Order Not Found', null);
                    arg.res.status(404).json(response);
                });
        })
        .catch(() => {
            const response = Response.make(404, 'User Not Found', null);
            arg.res.status(404).json(response);
        });
}

module.exports = {
    index,
    store,
    show
}