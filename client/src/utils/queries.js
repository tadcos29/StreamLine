import { gql } from '@apollo/client';



export const QUERY_EVENT = gql`
  {
    event {
      _id
      name
    }
  }
`;

export const QUERY_EVENTS = gql`
  {
    events {
      _id
      name
    }
  }
`;

export const QUERY_TICKET = gql`
  {
    ticket {
      _id
      name
    }
  }
`;

export const QUERY_TICKETS = gql`
  {
    tickets {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  query user {
    user {
      firstName
      lastName
      email
  
    }
  }
`;
