const mongoose  = require('mongoose');
const { Schema, model, SchemaTypes } = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

let studentSchema = new mongoose.Schema({
    _id: Number,
    pin: Number,
    hall: SchemaTypes.ObjectId,
    room: SchemaTypes.ObjectId
})

module.exports = model('student', studentSchema);