import { useUpdateLikes } from '../../../utils/hooks/playlist/useUpdateLike';
import { GET_USER_BY_ID, GetUserById } from '../../../utils/services/graphql/query/user/getById';
import { useQuery } from '@apollo/client';
import Style from './playlistInfo.module.css';
import editIcon from '../../../assets/icons/playlist/edit.png';
import PlaylistD from '../playlistDescription/playlistD';


interface PlaylistInfo {
    id: string;
    tittle: string;
    description: string;    
    userId: string;
    music: number;
    likes: number;
    dislikes: number
    time: string | undefined;
    handleEdit: React.Dispatch<React.SetStateAction<boolean>>
}

const PlaylistInfo = (props: PlaylistInfo) => {
  const {id, tittle, description, userId, music, time, dislikes, likes, handleEdit } = props;
  const { isLike, isDislike, handleLike } = useUpdateLikes(id);
  const { data } = useQuery<GetUserById>(GET_USER_BY_ID);
  return (
    <div className={Style.playlistHeader_tittle}>
      <h2>{tittle}</h2>
      {data?.getUserById.email === userId && <img className={Style.edit} onClick={() => handleEdit(true)} src={editIcon} alt='edit'/>}
      <p>{description}</p>
      <PlaylistD
        dislikes={dislikes}
        likes={likes}
        handleLike={handleLike}
        music={music}
        userId={userId}
        isDislike={isDislike}
        isLike={isLike}
        time={time}/>
    </div>
  );
};

export default PlaylistInfo;