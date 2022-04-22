const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    name: String,
    email: {
        unique: true,
        type: String
    },
    username: {
        unique: true,
        type: String
    },
    password: String,
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema);