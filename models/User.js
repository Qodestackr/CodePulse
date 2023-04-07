const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firebaseUID: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;