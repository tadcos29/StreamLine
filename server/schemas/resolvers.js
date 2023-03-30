const { AuthenticationError } = require('apollo-server-express');
const { User, Ticket } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {

    tickets: async () => {
      return await Ticket.find();
    },

      user: async (parent, args, context) => {
      console.log('ingetuserresolver');

      if (context.user) {
        console.log('inhasuser');
        const user = await User.findById(context.user._id)
        // .populate({
        //   path: 'tickets',
        //   populate: 'name'
        // });

        // user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    ticket: async (parent, { _id }, context) => {
      if (context.user) {
        const foundTicket = await Ticket.findById(_id);
        return foundTicket;
      }

      throw new AuthenticationError('Not logged in');
    },
    // checkout: async (parent, args, context) => {
    //   const url = new URL(context.headers.referer).origin;
    //   const order = new Order({ products: args.products });
    //   const line_items = [];

    //   const { products } = await order.populate('products');

    //   for (let i = 0; i < products.length; i++) {
    //     const product = await stripe.products.create({
    //       name: products[i].name,
    //       description: products[i].description,
    //       images: [`${url}/images/${products[i].image}`]
    //     });

    //     const price = await stripe.prices.create({
    //       product: product.id,
    //       unit_amount: products[i].price * 100,
    //       currency: 'usd',
    //     });

    //     line_items.push({
    //       price: price.id,
    //       quantity: 1
    //     });
    //   }

    //   const session = await stripe.checkout.sessions.create({
    //     payment_method_types: ['card'],
    //     line_items,
    //     mode: 'payment',
    //     success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
    //     cancel_url: `${url}/`
    //   });

    //   return { session: session.id };
    // }
  },
  Mutation: {
    addUser: async (parent, args) => {
      console.log('inadduser');
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addTicket: async (parent, args, context) => {
      console.log('inaddticket');
      console.log(args);
      if (context.user) {
        const newTicket = await Ticket.create(
          {
            name: args.name,
            description:args.description,
            creator: context.user._id
          }
        );

        await User.findByIdAndUpdate(context.user._id, { $push: { created: newTicket } });

        return newTicket;
      }

      throw new AuthenticationError('Not logged in');
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        console.log('inupdateuser-resolver');
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    // updateProduct: async (parent, { _id, quantity }) => {
    //   const decrement = Math.abs(quantity) * -1;

    //   return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    // },
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
