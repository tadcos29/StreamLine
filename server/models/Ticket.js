const mongoose = require('mongoose');

const { Schema } = mongoose;

const ticketSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: false,
    trim: true
  },
  creator: {
    type: String,
    required: true,
  }
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
