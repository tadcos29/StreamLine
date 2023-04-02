const { gql } = require('apollo-server-express');

const typeDefs = gql`


  type Ticket {
    _id: ID
    purchaseDate: String
    name: String
    description: String
    owner: User
    event: Event
    expired: Boolean
  }

  type Event {
    _id: ID
    streamTime: String
    name: String!
    description: String
    creator: User!
    accessKey:String,
    url: String
    isLive: Boolean
    isPast: Boolean
    admissionPrice: Float
    }


  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    tickets: [Ticket]
    created: [Event]
    accessKeys:[String]
    isHost: Boolean
    avatar:String
  }

 
  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    tickets: [Ticket]
    ticket (_id: ID!): Ticket
    events: [Event]
    event (_id: ID!): Event
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, ): Auth
    addTicket(event:ID): Ticket

    addEvent(
    name: String!
    description: String
    accessKey: String
    url: String
    isLive: Boolean
    isPast: Boolean
    admissionPrice: Float
  ): Event

    updateUser(firstName: String, lastName: String, email: String, password: String, avatar: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
