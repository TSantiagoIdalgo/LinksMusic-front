import { gql } from '@apollo/client';

export const GET_BY_AUTHOR = gql`
  query {
    getMusicByAuthor {
      id
      name
      author
      image
    }
  }
`;