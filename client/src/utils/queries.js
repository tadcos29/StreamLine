import { gql } from '@apollo/client';



export const QUERY_EVENT = gql`
  {
    event {
      _id
      name
      description
      url
      creator {
        firstName
        lastName
        _id
      }
      accessKey
    url
     
    isPast
    admissionPrice
    }
  }
`;

export const QUERY_EVENTS = gql`
  {
    events {
      _id
      name
      description
      url
      creator {
        firstName
        lastName
        _id
      }
      accessKey
    url
    isLive
    isPast
    admissionPrice
    }
  }
`;

export const QUERY_TICKET = gql`
  {
    ticket {
      _id
      name
      owner {
      _id
      firstName
      lastName
      email
    }
    event {
      _id
      name
      description
    }
    }
  }
`;

export const QUERY_TICKETS = gql`
  {
    tickets {
      _id
      name
      event {
      _id
      name
      description
    }
      
    }
  }
`;

export const QUERY_USER = gql`
  query user {
    user {
      _id
      firstName
      lastName
      email
      tickets{
        name
        purchaseDate
        event {
          name
          streamTime
          url
        }
      }
      
      # tickets {
      #   name
      #   purchaseDate
      #   expired
      #   event {
      #     name
      #   }
      # }
    }
  }
`;
