import { gql } from '@apollo/client';

export const UPDATE_PLAYLIST = gql`
  mutation($updatePlaylistId: String!, $data: PlaylistInput) {
    updatePlaylist(id: $updatePlaylistId, data: $data) {
      tittle
    }
  }
`;

export interface UpdatePlaylistProps {
    updatePlaylistId: string;
    data: {
      description?: string;
      tittle?: string;
    }
}