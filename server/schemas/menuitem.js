var mongoose = require('mongoose');

var MenuItemSchema = new mongoose.Schema({
  name : String,
  price : String,
  category : String,
});

module.exports = mongoose.model('MenuItem', MenuItemSchema);
