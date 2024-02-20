import { IMusic } from '../music/music';

export interface UrlData {
    title: string;
    image: string;
    name: string;
    album: string;
    url: string
  }
  
export interface UrlState {
  url: {
    data: UrlData,
    loading: false,
    uploading: false
  }
  }
export interface IMusicUrl {
  postMusicByUrl: IMusic
}
export interface IMusicUrlProps {
  postMusicByUrlId: string
}