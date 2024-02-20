import { useMutation } from '@apollo/client';
import { DELETE_PLAYLIST } from '../../services/graphql/mutation/playlist/delete';
import { PopUpMessage } from '../../helpers/modal';

export const useDeletePlaylist = (id: string) => {
  const [deletePlaylist] = useMutation(DELETE_PLAYLIST);

  async function onDelete () {
    try {
      await deletePlaylist({
        variables: {
          deletePlaylistId: id
        }
      });
      PopUpMessage('Playlist deleted', 1500);
      window.location.href = '/linksmusic/home';
    } catch (error: any) {
      PopUpMessage(error.message, 3000);
    }
  }
  return { onDelete };
};