const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema(
    {
        username: String,
        password: String,
        isAdmin: Boolean
    }
);

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('user', userSchema);
