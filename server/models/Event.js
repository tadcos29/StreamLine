const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventSchema = new Schema({
  streamTime: {
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
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: false,
  },
  accessKey: {
    type: String,
  },
  url: {
    type: Date,
  },
  isLive: {
    type: Boolean,
    default: false
  },
  isPast: {
    type: Boolean,
    default: false
  },
  admissionPrice: {
    type: Number,
    required: true,
    default: 0
  },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
