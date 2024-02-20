import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation($userName: String!, $email: String!, $passwordHash: String!) {
    createUser(userName: $userName, email: $email, passwordHash: $passwordHash) {
      email
    }
}
`;