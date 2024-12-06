const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    phone: { type: String, unique: true, sparse: true },
    password: String,
    googleId: String,
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", UserSchema);
