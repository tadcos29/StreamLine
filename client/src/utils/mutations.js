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
  mutation addTicket(
   $name: String!) {
    addTicket(
      name: $name
    ) {
      name
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
mutation updateUser($firstName: String, $lastName: String, $email: String, $password: String)
{
  updateUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
    firstName
    lastName
    email
  }
}`;

