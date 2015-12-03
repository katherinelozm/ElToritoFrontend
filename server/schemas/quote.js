var mongoose = require('mongoose');

var QuoteSchema = new mongoose.Schema({
  name : String,
  email : String,
  number : String, 
  personsNumber : Number,
  company : String, 
  date : Date, 
  hour : String,
  menu : String[],
});

module.exports = mongoose.model('Quote', QuoteSchema);
