import { useDispatch } from 'react-redux';
import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_MUSIC_URL, GetUrl, GetUrlVariables } from '../../services/graphql/query/music/getUrl';
import { getPlayRequest, getPlayFailure, getPlay } from '../../state/features/playingSlice';
import { GET_USER_HISTORY } from '../../services/graphql/query/user/history';
import { IMusic } from '../../types/music/music';

export const usePlayCurrent = (music: IMusic, id: string) => {
  const [getUrl] = useLazyQuery<GetUrl, GetUrlVariables>(GET_MUSIC_URL);
  const { refetch } = useQuery(GET_USER_HISTORY);
  const dispatch = useDispatch();

  async function getMusic() {
    try {
      if (!music || !id) throw new Error('No music or id');
      dispatch(getPlayRequest());
      const { data } = await getUrl({
        variables: { getMusicUrlId: id }
      });

      if (data) {
        dispatch(getPlay({...music, url: data.getMusicURL}));
      }
      refetch();
    } catch (error: any) {
      dispatch(getPlayFailure(error));
    }
  }

  return { getMusic };
};