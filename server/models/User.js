const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Ticket = require('./Ticket');
const Event = require('./Event');


const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  isHost: {
    type: Boolean,
    required: true,
    default: false
  },
  avatar: {
    type: String,
    required: false,
    default:'',
    },
    currentPurchase: {
      type: Schema.Types.ObjectId,
      ref: 'Event',
      required: false,
    },
  tickets: [Ticket.schema],
  created: [Event.schema],
  accessKeys: {
    type: [String],
    required: false,
    default: []
  },
  
  
  
},{
  toJSON: {
    virtuals: true,
    getters:true
  },
  id: false,
});



// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
 
  if (this.isNew || this.isModified('password')) {
    console.log('inpresavepasswordhook');
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  

  next();
});

// userSchema.pre('findOneAndUpdate', async function(next) {
//   const docToUpdate = await this.model.findOne(this.getQuery());
//   if (docToUpdate.isModified('password')) {
//     console.log('inspecialpasshook');
//     const saltRounds = 10;
//     this.password = await bcrypt.hash(this.password, saltRounds);
//   }
  

//   next();
// });

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
