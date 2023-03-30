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
    password
  }
}`;