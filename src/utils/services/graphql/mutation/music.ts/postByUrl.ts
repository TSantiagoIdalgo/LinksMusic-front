import { gql } from '@apollo/client';

export const POST_BY_URL = gql`
  mutation($postMusicByUrlId: String) {
    postMusicByUrl(id: $postMusicByUrlId) {
      name
    }
  }
`;