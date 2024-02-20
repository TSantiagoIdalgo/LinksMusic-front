import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  query($email: String!, $passwordHash: String!) {
    userLogin(email: $email, passwordHash: $passwordHash) {
      token
    }
  }
`;

export const NETWORK_LOGIN = gql`
  query($userName: String!, $email: String!, $image: String!) {
    userNetworkLogin(userName: $userName, email: $email, image: $image)
  }
`;