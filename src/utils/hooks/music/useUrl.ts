import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { getUrl, getUrlRequest, cleanUrl } from '../../state/features/urlSlice';
import { useDispatch } from 'react-redux';
import { urlSchema, Url } from '../../validates/url';
import { FieldValues } from 'react-hook-form';
import { GET_VIDEO_INFO, VideoInfo, VideoInfoProps } from '../../services/graphql/query/music/getVideoInfo';
import { useLazyQuery } from '@apollo/client';

export const useUrl = () => {
  const dispatch = useDispatch();
  const [getInfo] = useLazyQuery<VideoInfo, VideoInfoProps>(GET_VIDEO_INFO);
  const { register, handleSubmit, formState: { errors }, setError, reset } = useForm<Url>({
    resolver: zodResolver(urlSchema)
  });

  async function onSubmit(formState: FieldValues) {
    dispatch(getUrlRequest());
    try {
      const videoId = formState.url.split('v=')[1] ?? formState.url.split('/')[3].split('?')[0];
      const { data } = await getInfo({ 
        variables: { getMusicInfoId: videoId } });
      if (data?.getMusicInfo) {
        dispatch(getUrl({
          title: data.getMusicInfo.name,
          image: data.getMusicInfo.image,
          album: data.getMusicInfo.album,
          url: videoId
        }));
      }
    } catch (error: any) {
      setError('url', { message: error.message});
    }
  }

  const clean = () => {
    dispatch(cleanUrl());
    reset();
  };

  return { register, handleSubmit, onSubmit, errors, clean };
};