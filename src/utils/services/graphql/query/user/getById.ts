import { gql } from '@apollo/client';

export const GET_USER_BY_ID = gql`
  query {
    getUserById {
      email
      image
      userName
    }
  }
`;

export interface GetUserById {
  getUserById: {
    email: string;
    image: string | null;
    userName: string;
  };
}