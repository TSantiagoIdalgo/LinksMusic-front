import { gql } from '@apollo/client';

export const DELETE_MUSIC = gql`
  mutation($deleteMusicId: String) {
    deleteMusic(id: $deleteMusicId) {
      name
    }
  }
`;