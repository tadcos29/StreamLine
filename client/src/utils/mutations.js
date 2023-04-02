import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_TICKET = gql`
  mutation addTicket($event: ID) {
    addTicket(event: $event
    ) {
      name
      description
      owner {
      _id
      firstName
      lastName
      email
     
    }
      event {
        _id
        
      
      }
    }
  }
`;

export const UPLOAD_AVATAR = gql`
  mutation uploadAvatar($event: ID) {
    addTicket(event: $event
    ) {
      name
      description
      owner {
      _id
      firstName
      lastName
      email
     
    }
      event {
        _id
        
      
      }
    }
  }
`;


export const ADD_EVENT = gql`
 mutation addEvent(
  $name: String!
  $description: String
  $accessKey: String
  $url: String
  $admissionPrice: Float
) {
  addEvent(
    name: $name
    description: $description
    accessKey: $accessKey
    url: $url
    admissionPrice: $admissionPrice
  ) {
    _id
    name
    description
    creator {
      _id
      firstName
      lastName
      email
    }
    accessKey
    url
    isLive
    isPast
    admissionPrice
  }
}
`;




export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;
export const UPDATE_USER = gql`
mutation updateUser($firstName: String, $lastName: String, $email: String, $password: String, $avatar:String)
{
  updateUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, avatar:$avatar) {
    firstName
    lastName
    email
    avatar
      }
}`;

