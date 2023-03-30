const { gql } = require('apollo-server-express');

const typeDefs = gql`


  type Ticket {
    _id: ID
    purchaseDate: String
    name: String!
    creator: User!
    description: String
  }


  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    tickets: [Ticket]
    created: [Ticket]
    isHost: Boolean
  }

 
  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    tickets: [Ticket]
    ticket (_id: ID!): Ticket
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, ): Auth
    addTicket(name: String!): Ticket
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
