import { useSelector, useDispatch } from 'react-redux';
import { getPlay } from '../../state/features/playingSlice';
import { useLazyQuery } from '@apollo/client';
import { GET_MUSIC_URL, GetUrl, GetUrlVariables } from '../../services/graphql/query/music/getUrl';
import { IMusic } from '../../types/music/music';
import { MusicState } from '../../state/store';

export const useNext = (music: IMusic) => {
  const result = useSelector((state: MusicState) => state.music);

  const [getUrl] = useLazyQuery<GetUrl, GetUrlVariables>(GET_MUSIC_URL);
  const dispatch = useDispatch();

  async function nextSong () {
    const index = result.filtered.findIndex(song => song.id === music.id);
    const next = index === result.filtered.length - 1? 0 : index + 1;
    const musicId = result.filtered[next].id;
    const { data } = await getUrl({ variables: { getMusicUrlId: musicId } });
    dispatch(getPlay({...result.filtered[next], url: data?.getMusicURL}));

  }

  return { nextSong };

};


export const usePrev = (music: IMusic) => {
  const result = useSelector((state: MusicState) => state.music);
  
  const [getUrl] = useLazyQuery<GetUrl, GetUrlVariables>(GET_MUSIC_URL);
  const dispatch = useDispatch();

  async function prevSong () {
    const index = result.filtered.findIndex(song => song.id === music.id);
    const next = index === 0 ? result.filtered.length - 1 : index - 1;

    const musicId = result.filtered[next].id;
    const { data } = await getUrl({ variables: { getMusicUrlId: musicId } });
    dispatch(getPlay({...result.filtered[next], url: data?.getMusicURL}));

  }

  return { prevSong };
};
