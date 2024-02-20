import { gql } from '@apollo/client';

export const GET_MUSIC_URL = gql`
  query($getMusicUrlId: String) {
    getMusicURL(id: $getMusicUrlId)
  }
`;

export interface GetUrl {
    getMusicURL: string
}

export interface GetUrlVariables {
    getMusicUrlId: string
}