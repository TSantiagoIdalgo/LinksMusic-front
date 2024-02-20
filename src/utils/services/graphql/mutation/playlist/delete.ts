import { gql } from '@apollo/client';

export const DELETE_PLAYLIST = gql`
  mutation($deletePlaylistId: String!) {
    deletePlaylist(id: $deletePlaylistId) {
      tittle
    }
  }
`;