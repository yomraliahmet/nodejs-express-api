const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        uniqui: true,
    },
    password: {
        type: String,
        minlength: 5,
    },
    first_name: {
        type: String,
        minlength: 3,
    },
    last_name: {
        type: String,
        minlength: 3,
    },
    city: {
        type: String,
        minlength: 3,
    }
});

module.exports = mongoose.model('user',UserSchema);