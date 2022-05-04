const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RefreshTokenSchema = new Schema({
    user_id: Schema.Types.ObjectId,
    token: { type: String },
    expiry_date: {
        type: Date,
    }
});

module.exports = mongoose.model('refreshToken',RefreshTokenSchema);