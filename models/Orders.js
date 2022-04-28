const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    user: Object,
    product: Object,
    createdAt: {
        type: Date,
        default: Date.now,      
    }
});

module.exports = mongoose.model('order',OrderSchema);