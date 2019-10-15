const mongoose = require('mongoose');

let roomSchema = new mongoose.Schema({
    name: String,
    hall: String, // ID of the hall
    members: [Number] // IDs of the students
})

module.exports = mongoose.model('Room', roomSchema);