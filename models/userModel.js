const { MongoOIDCError } = require("mongodb");
const mongoose = require("mongoose");
const { type } = require("os");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter the username"],
    },
    email: {
        type: String,
        required: [true, "Please enter the email address"],
        unique: [true, "Email address already exists"],
    },
    password: {
        type: String,
        required: [true, "Please enter the user password"],
    },
}, {
    timestamps: true,}
);

module.exports = mongoose.model("User", userSchema);