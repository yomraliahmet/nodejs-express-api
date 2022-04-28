const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
        uniqui: true,
    },
    product_code: {
        type: String,
        required: true,
        uniqui: true,
    },
});

module.exports = mongoose.model('product',ProductSchema);