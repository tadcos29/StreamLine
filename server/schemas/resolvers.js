const { AuthenticationError } = require('apollo-server-express');
const { User, Ticket, Event } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_51MsMqBHgq2gnLMifCZiHinKLSbYxFKwiubX5xxwhxDBOK8BMxTm5kzQGl0HQiWROVt1qXVRUeT7anGpPIFCLYm2z00s8tqPGws');

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

// deleteevent



    getCurrentPurchase: async (parent, args, context) => {
      if (context.user) {
        const foundUser = await User.findById(context.user._id);
        console.log('in-cp');
        return foundUser.currentPurchase;
     
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
        user.tickets.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    
    
    // stripe attempt

    checkout: async (parent, {event}, context) => {
      // this should actually be the event, possibly
      const url = new URL(context.headers.referer).origin; // might change this to tickets
      // this should likely be a findticket mongoose query
      // and probably an args.event rather than args
      const line_items = [];
      console.log('incheckout');
      console.log(event);
      const foundEvent = await Event.findById(event);
      console.log(foundEvent);
      // see if it's the event
      // const { products } = await order.populate('products');
      const product = await stripe.products.create ({
        name: foundEvent.name,
        ...(foundEvent.description && { description: foundEvent.description })
            })
      const price = await stripe.prices.create({
        product: product.id,
        unit_amount: foundEvent.admissionPrice*100,
        currency: 'cad'
      })

      line_items.push({
        price:price.id,
        quantity:1
          });
      console.log('assembled');
      console.log(line_items);

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success`,
        cancel_url: `${url}/failure`  // need fix
      });

      return { session: session.id };
    }
  },


  Mutation: {
    addUser: async (parent, args) => {
      console.log('inadduser');
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    setCurrentPurchase: async (parent, { event }, context) => {
      if (context.user) {
        console.log('inscp');
        const foundEvent = await Event.findById(event);
        modifiedUser = await User.findByIdAndUpdate(
          context.user._id,
          { currentPurchase: foundEvent },
          { new: true }
        );
            return modifiedUser;
      }
    
      throw new AuthenticationError('Not logged in');
    },



    toggleEvent: async(parent, {_id, isLive}, context) => {
      if (context.user) {
        console.log('in-toggle-event');
        return await Event.findByIdAndUpdate(_id, {isLive}, { new: true });
      }

      throw new AuthenticationError('Not logged in');
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


    updateEvent: async (parent, args, context) => {
      console.log('ineditevent');
      console.log(args);
      if (context.user) {
        const newEvent = await Event.findByIdAndUpdate(args._id,args,{new:true});
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
