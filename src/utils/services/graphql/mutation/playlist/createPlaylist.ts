import { gql } from '@apollo/client';

export const CREATE_PLAYLIST = gql`
  mutation($data: PlaylistInput) {
    createPlaylist(data: $data) {
      tittle
    }
  }
`;

export interface CreatePlaylist {
  createPlaylist: {
    tittle: string;
  }
}

export interface CreatePlaylistProps {
    data: {
      tittle: string;
      description: string;
    }
}