const mongoose = require('mongoose');
const dayjs = require('dayjs');


const { Schema } = mongoose;

const eventSchema = new Schema({
  streamTime: {
    type: Date,
    default: Date.now,
    get: (streamTime) => dayjs(streamTime).format('MMMM D[th], YYYY [at] HH:mm')

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
    type: String,
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
    default: 0,
    get: (admissionPrice) => (admissionPrice/100).toFixed(2),
    set: (admissionPrice) => (admissionPrice*100)


  },
},
{
  toJSON: {
    virtuals: true,
    getters:true
  },
  id: false,
}
);

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
