import { gql } from '@apollo/client';

export const GET_ALL_MUSIC = gql`
  query($page: Int, $size: Int) {
    getPaginateMusic(page: $page, size: $size) {
      id
      name
      album
      duration
      image
      userId
    }
  }
`;