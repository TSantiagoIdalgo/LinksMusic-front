import { useQueryURL } from '../common/useQueryURL';
import { useQuery } from '@apollo/client';
import { GET_ALL_ALBUM } from '../../services/graphql/query/music/getAllByAlbum';
import { IMusic } from '../../types/music/music';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getFiltered } from '../../state/features/musicSlice';

interface IAlbum {
  id: string;
  name: string
  author: string;
  music: IMusic[]
}

interface IAlbumView {
  getAllMusicByAuthor: IAlbum;
}
  
interface IAlbumViewProps {
  album: string
}

export const useGetAlbum = () => {
  const dispatch = useDispatch();
  const { queryURL } = useQueryURL('album');
  const { data, error, loading } = useQuery<IAlbumView, IAlbumViewProps>(GET_ALL_ALBUM, {
    variables: { album: queryURL }
  });

  const musicImg = data?.getAllMusicByAuthor.music.find(m => m.image !== null);
  const totalDuration = data?.getAllMusicByAuthor.music.reduce((acc, curr) => acc + parseInt(curr.duration), 0);

  function formatTime() {
    if (!totalDuration) return;
    const seg = parseInt(totalDuration.toString());
    const minutes = Math.floor(seg / 60);
    const seconds = seg % 60;
    return `${minutes} minutes and ${seconds} seconds`;
  }

  useEffect(() => {
    if (!loading && data?.getAllMusicByAuthor) dispatch(getFiltered(data.getAllMusicByAuthor.music));
  }, [loading]);

  return { musicImg, time: formatTime(), data: data?.getAllMusicByAuthor, error, loading };
};