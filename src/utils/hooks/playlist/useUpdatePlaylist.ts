import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { GET_PLAYLIST_BY_ID } from '../../services/graphql/query/playlist/getPlaylistById';
import { UPDATE_PLAYLIST, UpdatePlaylistProps } from '../../services/graphql/mutation/playlist/update';
import { playlistSchema, Playlist } from '../../validates/playlist';
import { zodResolver } from '@hookform/resolvers/zod';
import { PopUpMessage } from '../../helpers/modal';
import React from 'react';

export const useUpdatePlaylist = (
  id: string, 
  handleEdit: React.Dispatch<React.SetStateAction<boolean>>) => {
  const [updatePlaylist] = useMutation<UpdatePlaylistProps>(UPDATE_PLAYLIST, {
    refetchQueries: [{ query: GET_PLAYLIST_BY_ID, variables: { getPlaylistByIdId: id } }]
  });
  const { register, handleSubmit, formState: { errors } } = useForm<Playlist>({
    resolver: zodResolver(playlistSchema)
  });


  async function editPlaylist (form: Playlist) {
    PopUpMessage('Editing...', 1500);
    try {
      await updatePlaylist({
        variables: {
          updatePlaylistId: id,
          data: {
            tittle: form.tittle,
            description: form.description
          }
        }
      });
      handleEdit(false);
      PopUpMessage('Edited!', 1500);
    } catch (error: any) {
      PopUpMessage(error.message, 1500);
      handleEdit(false);
    }
  }

  
  return { register, handleSubmit, errors, editPlaylist };
};