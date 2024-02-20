import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { PopUpMessage } from '../../helpers/modal';
import { useMutation } from '@apollo/client';
import { CREATE_PLAYLIST, CreatePlaylist, CreatePlaylistProps } from '../../services/graphql/mutation/playlist/createPlaylist';
import { zodResolver } from '@hookform/resolvers/zod';
import { playlistSchema, Playlist } from '../../validates/playlist';
import { GET_USER_PLAYLIST } from '../../services/graphql/query/playlist/getUserPlaylist';

export const useCreatePlaylist = () => {
  const [loading, setLoading] = useState(false);
  const [createPlaylist] = useMutation<CreatePlaylist, CreatePlaylistProps>(CREATE_PLAYLIST, {
    refetchQueries: [{ query: GET_USER_PLAYLIST }]
  });
  const { register, handleSubmit, formState: { errors }, setError, reset } = useForm<Playlist>({
    resolver: zodResolver(playlistSchema)
  });

  async function onSubmit(data: Playlist) {
    PopUpMessage('Creating...', 2000);
    try {
      setLoading(true);
      await createPlaylist({
        variables: {
          data: data
        }
      });
      setLoading(false);
      PopUpMessage('Created!', 1000);
      reset();
    } catch (error: any) {
      setError('tittle', {
        message: error.message,
      });
      setError('description', {
        message: error.message,
      });
      setLoading(false);
      reset();
    }
  }

  return { register, handleSubmit, onSubmit, loading, errors};
};