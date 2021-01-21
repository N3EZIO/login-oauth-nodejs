const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    googleID: String,
    emailID: String
})

const User = mongoose.model('user',userSchema);

module.exports = User;