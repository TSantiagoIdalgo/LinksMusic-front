import { gql } from '@apollo/client'; 

export const GET_USER_PLAYLIST = gql`
  query {
    getUserPlaylist {
      id
      tittle
    }
  }
`;

interface IUserPlaylist {
  id: string;
  tittle: string;
}

export interface UserPlaylist {
  getUserPlaylist: IUserPlaylist[]
}