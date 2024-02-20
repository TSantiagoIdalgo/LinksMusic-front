import { useQuery } from '@apollo/client';
import { PopUpMessage } from '../../helpers/modal';
import { GET_ALL_MUSIC } from '../../services/graphql/query/music/getAllMusic';
import { fileType } from '../../helpers/fileType';
import { useState } from 'react';
import axios from 'axios';

export const useUploadFile = () => {
  const uri = `${import.meta.env.VITE_API_URL}/upload`;
  const token = window.localStorage.getItem('USER_INFO')||window.sessionStorage.getItem('USER_INFO');
  const [loading, setLoading] = useState(false);

  const { refetch } = useQuery(GET_ALL_MUSIC, {
    variables: { page: 1, size: 20 },
  });

  async function upload(file: File) {
    console.log(file);
    try {
      if (fileType(file)) throw new Error('File type is not supported');
      PopUpMessage('Uploading file...', 1500);
      setLoading(true);
      const config = {
        headers: { 'Authorization': `Bearer ${token}` }
      };
      const formData = new FormData();
      formData.append('files', file);

      await axios.post(uri, formData, config);
      await refetch();
      setLoading(false);
      PopUpMessage('File uploaded successfully', 1500);
      
    } catch (error: any) {
      const message: string =error.message;
      PopUpMessage(message, 1500);
      setLoading(false);
    }
  }

  return { upload, loading };
};