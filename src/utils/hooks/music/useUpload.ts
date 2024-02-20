import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { PopUpMessage } from '../../helpers/modal';
import { setUploading, cleanUploading } from '../../state/features/urlSlice';
import { useMutation } from '@apollo/client';
import { GET_ALL_MUSIC } from '../../services/graphql/query/music/getAllMusic';
import { POST_BY_URL } from '../../services/graphql/mutation/music.ts/postByUrl';
import { IMusicUrl, IMusicUrlProps, UrlState } from '../../types/url/url';


export const useUploadByVideo = () => {
  const [postByUrl] = useMutation<IMusicUrl, IMusicUrlProps>(POST_BY_URL, {
    refetchQueries: [ 
      { query: GET_ALL_MUSIC, variables: { page: 1, size: 20 } } ]
  });

  const dispatch = useDispatch();
  const { data, uploading } = useSelector((state: UrlState) => state.url);


  async function Upload () {
    PopUpMessage('Uploading', 3000);
    dispatch(setUploading());
    try {
      await postByUrl({ variables: { postMusicByUrlId: data.url },  });
      PopUpMessage('Upload complete', 1500);
      dispatch(cleanUploading());
    } catch (error: any) {
      PopUpMessage(error.message, 1500);
      dispatch(cleanUploading());
    } 
  }

  return { Upload, uploading, data };
};

export const useUploadByName = () => {
  const [uploading, setUploading] = useState(false);
  const [postByUrl] = useMutation<IMusicUrl, IMusicUrlProps>(POST_BY_URL, {
    refetchQueries: [ 
      { query: GET_ALL_MUSIC, variables: { page: 1, size: 20 } } ]
  });

  async function Upload (id: string) {
    PopUpMessage('Uploading', 3000);
    setUploading(true);
    try {
      await postByUrl({ variables: { postMusicByUrlId: id },  });
      PopUpMessage('Upload complete', 1500);
      setUploading(false);
    } catch (error: any) {
      PopUpMessage(error.message, 1500);
      setUploading(false);
    } 
  }

  return { Upload, uploading };
};