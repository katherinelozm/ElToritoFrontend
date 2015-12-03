var mongoose = require('mongoose');

var ReservationSchema = new mongoose.Schema({
  name : String,
  email : String,
  number : String, 
  personsNumber : Number,
  company : String, 
  date : Date, 
  hour : String,
  comment : String,
  place : String,
});

module.exports = mongoose.model('Reservation', ReservationSchema);
