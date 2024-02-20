import { gql } from '@apollo/client';

export const UPDATE_LIKE = gql`
  mutation($playlistId: String!, $action: String!) {
    updateLikes(playlistId: $playlistId, action: $action) {
      dislike
      like
    }
  }
`;

export interface UpdateLike {
    updateLikes: {
      dislike: number;
      like: number;
    }
}

export type Action = 'likes' | 'dislikes';

export interface UpdateLikeProps {
    playlistId: string;
    action: Action;
}