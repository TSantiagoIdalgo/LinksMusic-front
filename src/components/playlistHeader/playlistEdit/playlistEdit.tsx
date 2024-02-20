import { useUpdateLikes } from '../../../utils/hooks/playlist/useUpdateLike';
import { useUpdatePlaylist } from '../../../utils/hooks/playlist/useUpdatePlaylist';
import ReactDOM from 'react-dom';
import PlaylistD from '../playlistDescription/playlistD';
import PlaylistDelete from '../playlistDelete/playlistDelete';
import Style from './playlistEdit.module.css';
import trashIcon from '../../../assets/icons/player/trash.png';
import editIcon from '../../../assets/icons/playlist/edit.png';
import { useState } from 'react';


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

const PlaylistEdit = (props: PlaylistInfo) => {
  const { id, tittle, description, userId, music, time, dislikes, likes, handleEdit } = props;
  const [portal, handleDelete] = useState(false);
  const { editPlaylist, handleSubmit, register, errors } = useUpdatePlaylist(id, handleEdit);
  const { isLike, isDislike, handleLike } = useUpdateLikes(id);

  return (
    <form className={Style.playlistHeader_tittle} onSubmit={handleSubmit(editPlaylist)}>
      <input type='text' {...register('tittle')} defaultValue={tittle}/>
      <span>{errors?.tittle?.message}</span>
      <textarea {...register('description')} defaultValue={description}/>
      <span>{errors?.description?.message}</span>
      <div className={Style.edit}>
        <img src={trashIcon} alt="trash" onClick={() => handleDelete(true)} />
        <button type='submit'>Edit</button>
        <img src={editIcon} alt='EDIT' onClick={() => handleEdit(false)}/>
      </div>
      <PlaylistD
        dislikes={dislikes}
        likes={likes}
        isLike={isLike}
        isDislike={isDislike}
        handleLike={handleLike}
        music={music}
        time={time}
        userId={userId}/>
      {portal && 
        ReactDOM.createPortal(<PlaylistDelete handleDelete={handleDelete} id={id} />, 
          document.querySelector('#portal') as Element)}
    </form>
  );
};

export default PlaylistEdit;