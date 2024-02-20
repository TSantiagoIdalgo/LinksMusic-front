import { configureStore } from '@reduxjs/toolkit';
import musicReducer from './features/musicSlice';
import playReducer from './features/playingSlice';
import urlResolver from './features/urlSlice';
import { IMusic } from '../types/music/music';

export interface PlaylistState {
  music: {
    loading: boolean,
    error: string,
    filtered: IMusic[]
    data: {
      tittle: string;
      description: string;
      userId: string;
      music: IMusic[];
    }
  }
}

export interface MusicState {
  music: {
    data: IMusic[],
    loading: boolean,
    error: string,
    filtered: IMusic[]
  }
}

export interface PlayState {
  play: {
    data: IMusic,
    error: string,
    loading: boolean,
    playing: boolean
  }
}

export const store = configureStore({
  reducer: {
    music: musicReducer,
    play: playReducer,
    url: urlResolver,
  }
});