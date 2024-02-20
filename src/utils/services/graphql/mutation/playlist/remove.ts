import { gql } from '@apollo/client';

export const REMOVE_MUSIC_FROM_PLAYLIST = gql`
  mutation($musicId: String!, $playlistId: String!) {
    removeMusicFromPlaylist(musicId: $musicId, playlistId: $playlistId) {
      id
      name
    }
  }
`;

export interface RemoveProps {
    musicId: string;
    playlistId: string;
}

export interface Remove {
    removeMusicFromPlaylist: {
        id: string;
        name: string;
    }
}