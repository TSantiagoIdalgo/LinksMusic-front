import { gql } from '@apollo/client';

export const GET_ALL_ALBUM = gql`
query($album: String!) {
  getAllMusicByAuthor(album: $album) {
    id
    name
    author
    music {
      image
      name
      album
      duration
      id
      userId
    }
  }
}
`;