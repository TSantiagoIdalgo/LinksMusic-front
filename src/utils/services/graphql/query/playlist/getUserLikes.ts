import { gql } from '@apollo/client';

export const GET_USER_LIKES = gql`
  query($getUserLikesId: String!) {
    getUserLikes(id: $getUserLikesId) {
      dislike
      like
    }
  }
`;

export interface GetUserLikesData {
  getUserLikes: {
    dislike: boolean;
    like: boolean;
  };
}

export interface GetUserLikesProps {
    getUserLikesId: string;
}