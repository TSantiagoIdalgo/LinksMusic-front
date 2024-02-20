import { useQuery } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { GET_PLAYLIST_MUSIC, IPlaylistMusic, IplaylistMusicProps } from '../../services/graphql/query/playlist/getMusicPlaylist';
import { useEffect } from 'react';
import { getFiltered } from '../../state/features/musicSlice';

export const useGetPlaylistMusic = (query: string) => {
  const dispatch = useDispatch();
  const { data, error, loading } = useQuery<IPlaylistMusic, IplaylistMusicProps>(GET_PLAYLIST_MUSIC, {
    variables: { getPlaylistMusicId: query }
  });

  useEffect(() => {
    if (!loading && data?.getPlaylistMusic) dispatch(getFiltered(data.getPlaylistMusic.music));
  }, [loading]);

  return { music: data?.getPlaylistMusic.music, loading, error };
};