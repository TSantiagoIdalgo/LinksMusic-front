import { gql } from '@apollo/client';

export const GET_VIDEO_INFO = gql`
  query($getMusicInfoId: String) {
    getMusicInfo(id: $getMusicInfoId) {
      name
      album
      image
    }
}
`;

export interface VideoInfo {
  getMusicInfo: {
    name: string;
    album: string;
    image: string;
  }
}

export interface VideoInfoProps {
    getMusicInfoId: string;
}