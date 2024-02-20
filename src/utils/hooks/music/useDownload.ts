import { useLazyQuery, useMutation } from '@apollo/client';
import { PopUpMessage } from '../../helpers/modal';
import { DELETE_MUSIC } from '../../services/graphql/mutation/music.ts/delete';
import { gql } from '@apollo/client';
import axios from 'axios';

const GET_MUSIC_URL = gql`
  query($getMusicUrlId: String) {
   getMusicURL(id: $getMusicUrlId)
  }
`;

export function useDownload() {
  const [getDownload] = useLazyQuery(GET_MUSIC_URL);

  async function getDownloadUrl(id: string, name: string) {
    PopUpMessage('Downloading', 1500);
    try {
      const { data } = await getDownload({ variables: { getMusicUrlId: id }});
      const response = await axios.get(data.getMusicURL, {
        responseType: 'blob', 
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${name}.mp3`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      PopUpMessage('Downloaded!', 1000);
    } catch (error: any) {
      PopUpMessage(error.message, 3000);
    }
  }

  return { getDownloadUrl };
}


export const useDelete = () => {
  const [deleteMusic] = useMutation(DELETE_MUSIC);

  async function handleDelete(id: string) {
    try {
      PopUpMessage('Deleting', 1500);
      await deleteMusic({ variables: { deleteMusicId: id}});
      window.location.reload();
    } catch (error: any) {
      PopUpMessage(error.message, 1500);
    }
  }

  return { handleDelete };
};