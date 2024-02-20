import { gql } from '@apollo/client';

export const GET_PLAYLIST_BY_ID = gql`
query($getPlaylistByIdId: String!) {
  getPlaylistById(id: $getPlaylistByIdId) {
    id
    tittle
    description
    userId
    likes
    dislikes
  }
}
`;

interface PlaylistById {
  id: string;
  tittle: string;
  description: string;
  userId: string;
  likes: number;
  dislikes: number;
}

export interface IPlaylistById {
    getPlaylistById: PlaylistById;
}

export interface IPlaylistByIdProps {
    getPlaylistByIdId: string;
}