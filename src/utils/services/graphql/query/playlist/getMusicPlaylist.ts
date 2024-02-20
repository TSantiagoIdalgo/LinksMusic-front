import { gql } from '@apollo/client';
import { IMusic } from '../../../../types/music/music';

export const GET_PLAYLIST_MUSIC = gql`
query($getPlaylistMusicId: String!) {
  getPlaylistMusic(id: $getPlaylistMusicId) {
    tittle
    music {
      name
      id
      image
      name
      album
      duration
    }
  }
}
`;

export interface PlaylistMusic {
    tittle: string;
    music: IMusic[]
}

export interface IPlaylistMusic {
    getPlaylistMusic: PlaylistMusic
}

export interface IplaylistMusicProps {
    getPlaylistMusicId: string
}