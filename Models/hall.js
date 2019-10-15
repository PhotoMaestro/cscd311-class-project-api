const mongoose = require('mongoose');

let hallSchema = new mongoose.Schema({

   name: String

})

module.exports = mongoose.model('hall', hallSchema);



