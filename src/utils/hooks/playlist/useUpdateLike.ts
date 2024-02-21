import { useQuery, useMutation } from '@apollo/client';
import { UPDATE_LIKE, UpdateLike, UpdateLikeProps, Action } from '../../services/graphql/mutation/playlist/updateLike';
import { GET_USER_LIKES, GetUserLikesData, GetUserLikesProps } from '../../services/graphql/query/playlist/getUserLikes';
import { GET_PLAYLIST_BY_ID } from '../../services/graphql/query/playlist/getPlaylistById';
import { PopUpMessage } from '../../helpers/modal';

export const useUpdateLikes = (id: string) => {
  const [updateLike] = useMutation<UpdateLike, UpdateLikeProps>(UPDATE_LIKE, {
    refetchQueries: [{
      query: GET_PLAYLIST_BY_ID, variables: { getPlaylistByIdId: id }
    },{ 
      query: GET_USER_LIKES, variables: { getUserLikesId: id } 
    }],
  });
  const { data } = useQuery<GetUserLikesData, GetUserLikesProps>(GET_USER_LIKES, {
    variables: { getUserLikesId: id }
  });

  const handleLike = async (action: Action) => {
    try {
      document.documentElement.style.cursor = 'wait';
      await updateLike({ variables: { playlistId: id, action: action } });
      document.documentElement.style.cursor = 'auto';
    } catch (error) {
      PopUpMessage('You need to log in', 1500);
      document.documentElement.style.cursor = 'auto';
    }
  };

  return { isLike: data?.getUserLikes.like, isDislike: data?.getUserLikes.dislike, handleLike };
};