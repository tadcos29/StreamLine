const mongoose = require('mongoose');

const { Schema } = mongoose;

const avatarSchema = new Schema({
  filename: {
    type: String,
    required: false,
    trim: true
  },
  file: {
    data: Buffer,
    contentType: String,
  },
  assignee: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: false,
  },
}, 
{
  toJSON: {
    virtuals: true,
    getters:true
  },
  id: false,
});

const Avatar = mongoose.model('Avatar', avatarSchema);

module.exports = Avatar;
