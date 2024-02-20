import { gql } from '@apollo/client';

export const ADD_MUSIC_TO_PLAYLIST = gql`
  mutation($musicId: String!, $playlistId: String!) {
    addMusicToPlaylist(musicId: $musicId, playlistId: $playlistId) {
      id
    } 
  }
`;

export interface AddProps {
    musicId: string;
    playlistId: string;
}

export interface Add {
  addMusicToPlaylist: {
    id: string;
  }
}