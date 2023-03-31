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
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: false,
  },
  event: {
    type: Schema.Types.ObjectId,
    ref: 'Event',
    required: false,
  },
  expired: {
    type: Boolean,
    default: false
  }
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
