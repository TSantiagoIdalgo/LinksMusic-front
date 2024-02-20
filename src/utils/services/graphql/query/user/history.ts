import { gql } from '@apollo/client';
import { IMusic } from '../../../../types/music/music';


export const GET_USER_HISTORY = gql`
query {
  getUserHistory {
    user {
      userName
      image
    }
    history {
      music {
      id
      image
      name
      album
      duration
    }
    album {
      id
      image
      name
      author
    }
    playlist {
      id
      tittle
      userId
      music {
        image
      }
    }
    }
  }
}
`;

export interface History {
  user: {
    userName: string;
    image: string;
  };
  history: {
    music: IMusic | null;
    album: {
      id: string;
      image: string;
      name: string;
      author: string;
    } | null;
    playlist: {
      id: string;
      tittle: string;
      userId: string;
      music: IMusic[];
    } | null;
  }[]
}

export interface IUserHistory {
    getUserHistory: History;
}