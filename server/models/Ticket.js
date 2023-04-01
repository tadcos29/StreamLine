const mongoose = require('mongoose');
const dayjs = require('dayjs');

const { Schema } = mongoose;

const ticketSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now,
    get: (streamTime) => dayjs(streamTime).format('MMMM D[th], YYYY [at] HH:mm')

  },
  name: {
    type: String,
    required: false,
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
}, 
{
  toJSON: {
    virtuals: true,
    getters:true
  },
  id: false,
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
