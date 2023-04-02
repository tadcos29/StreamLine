const { AuthenticationError } = require('apollo-server-express');
const { User, Ticket, Event } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {

    tickets: async () => {
      return await Ticket.find().populate('owner event');
    },
    ticket: async (parent, { _id }, context) => {
      if (context.user) {
        const foundTicket = await Ticket.findById(_id).populate('owner event');
        return foundTicket;
      }

      throw new AuthenticationError('Not logged in');
    },

// find all events


    events: async () => {
      return await Event.find().populate('creator');
    },

// find one event

    event: async (parent, { _id }, context) => {
      if (context.user) {
        const foundEvent = await Event.findById(_id);
        return foundEvent;
      }

      throw new AuthenticationError('Not logged in');
    },



    user: async (parent, args, context) => {
      console.log('ingetuserresolver');

      if (context.user) {
        console.log('inhasuser');
        const user = await User.findById(context.user._id)
        .populate({
          path: 'tickets',
          populate: {
            path: 'event',
          }
        }) // ticket populate
        .populate('created');
        // user.tickets.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    
    
  },
  Mutation: {
    addUser: async (parent, args) => {
      console.log('inadduser');
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    // add Ticket
    addTicket: async (parent, args, context) => {
      console.log('inaddticket');
      console.log(args);
      if (context.user) {
        const newTicket = await Ticket.create({ ...args, owner: context.user._id}
        );

        await User.findByIdAndUpdate(context.user._id, { $push: { tickets: newTicket } });

        return newTicket;
      }

      throw new AuthenticationError('Not logged in');
    },

// add event

    addEvent: async (parent, args, context) => {
      console.log('inaddevent');
      console.log(args);
      if (context.user) {
        const newEvent = await Event.create({ ...args, creator: context.user._id });
        await User.findByIdAndUpdate(context.user._id, { $push: { created: newEvent } });
        return newEvent;
      }

      throw new AuthenticationError('Not logged in');
    },


// updateUser

    updateUser: async (parent, args, context) => {
      if (context.user) {
        console.log('inupdateuser-resolver');
        // return await User.findByIdAndUpdate(context.user._id, args, { new: true });
        userRec = await User.findById(context.user._id);
        console.log(args);
        Object.assign(userRec, args);
        userRec.save();
        return userRec;
      }

      throw new AuthenticationError('Not logged in');
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;
