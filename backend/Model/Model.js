const mongoose = require('mongoose')

const modelSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

module.exports = mongoose.model('users', modelSchema)