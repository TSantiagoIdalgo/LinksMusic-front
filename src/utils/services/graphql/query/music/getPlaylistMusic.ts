import { gql } from '@apollo/client';
import { IMusic } from '../../../../types/music/music';

export const GET_ALL_PLAYLIST = gql`
  query($page: Int, $size: Int) {
    getAllPlaylist(page: $page, size: $size) {
      id
      tittle
      userId
      music {
        id
        image
        duration
        userId
      }
    }
  }
`;

export interface IGetPlaylist {
  getAllPlaylist: {
    id: string;
    tittle: string;
    userId: string;
    music: IMusic[]
  }[]
}

export interface IGetPlaylistProps {
    page: number;
    size: number;
}