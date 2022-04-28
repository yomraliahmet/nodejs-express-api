const express = require('express');

const Product = require('../models/Products');
const Response = require('../helpers/response');

// Get all data.
function index(arg) {

    Product.find({})
        .then((data) => {

            const newData = data.map((data) => {
                return {
                    id: data._id,
                    product_code: data.product_code,
                    name: data.name
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

    const { name, product_code } = arg.req.body;

    // Record Exists
    Product.findOne({
        name, product_code
    }, (err, product) => {
        if (err) { throw err; }

        if (product) {
            const response = Response.make(409, 'This record is available.', null);
            arg.res.status(409).json(response);
        } else {
            // Add record
            const product = new Product({
                product_code,
                name
            });

            product.save()
                .then((data) => {
                    const response = Response.make(200, 'Success', {
                        id: data._id,
                        product_code: data.product_code,
                        name: data.name
                    });
                    arg.res.status(200).json(response);
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

    Product.findById(id)
        .then((data) => {
            if (!data) {
                const response = Response.make(404, 'Product Not Found', null);
                arg.res.status(404).json(response);
            } else {
                const response = Response.make(200, 'Success', {
                    id: data._id,
                    product_code: data.product_code,
                    name: data.name
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
    const { name, product_code } = arg.req.body;

    Product.findByIdAndUpdate(id, { name, product_code }, { new: true })
        .then((data) => {
            if (!data) {
                const response = Response.make(404, 'Product Not Found', null);
                arg.res.status(404).json(response);
            } else {
                const response = Response.make(200, 'Success', {
                    id: data._id,
                    product_code: data.product_code,
                    name: data.name
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

    Product.findByIdAndRemove(id)
        .then((product) => {
            if (!product) {
                const response = Response.make(404, 'Product Not Found', null);
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