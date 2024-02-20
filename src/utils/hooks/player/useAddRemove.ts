import { useMutation, useQuery } from '@apollo/client';
import { GET_PLAYLIST_MUSIC, IPlaylistMusic, IplaylistMusicProps  } from '../../services/graphql/query/playlist/getMusicPlaylist';
import { ADD_MUSIC_TO_PLAYLIST, Add, AddProps } from '../../services/graphql/mutation/playlist/add';
import { PopUpMessage } from '../../helpers/modal';
import { REMOVE_MUSIC_FROM_PLAYLIST, Remove, RemoveProps } from '../../services/graphql/mutation/playlist/remove';


interface Playlist {
  id: string
}

export function useAddremove (playlist: Playlist, id: string) {
  const [addToPlaylist] = useMutation<Add, AddProps>(ADD_MUSIC_TO_PLAYLIST);
  const [removeFromPlaylist] = useMutation<Remove, RemoveProps>(REMOVE_MUSIC_FROM_PLAYLIST);
  const { data, loading, error, refetch } = useQuery<IPlaylistMusic, IplaylistMusicProps>(GET_PLAYLIST_MUSIC, {
    variables: {
      getPlaylistMusicId: playlist.id
    }
  });

  async function add () {
    PopUpMessage('Adding', 1500);
    try {
      await addToPlaylist({
        variables: {
          musicId: id,
          playlistId: playlist.id
        }
      });
      await refetch();
      PopUpMessage('Added', 1000);
    } catch (error: any) {
      PopUpMessage(error.message, 3000);
    }
  }

  async function remove () {
    PopUpMessage('Removing', 1500);
    try {
      await removeFromPlaylist({
        variables: {
          musicId: id,
          playlistId: playlist.id
        }
      });
      await refetch();
      PopUpMessage('Removed', 1000);
    } catch (error: any) {
      PopUpMessage(error.message, 3000);
    }

  }

  return { add, remove, data, loading, error };
}