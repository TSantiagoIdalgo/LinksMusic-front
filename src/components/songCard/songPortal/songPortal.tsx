import Style from './songPortal.module.css';
import downloadIcon from '../../../assets/icons/player/archive.png';
import addIcon from '../../../assets/icons/player/add.png';
import AddPlaylist from '../addPlaylist/addPlaylist';
import trashIcon from '../../../assets/icons/player/trash.png';
import { useQuery } from '@apollo/client';
import { GET_USER_BY_ID, GetUserById } from '../../../utils/services/graphql/query/user/getById';
import { useDownload, useDelete } from '../../../utils/hooks/music/useDownload';
import { useState } from 'react';

interface IProps {
  id: `${string}-${string}-${string}-${string}-${string}`;
  name: string;
  handlePortal: React.Dispatch<React.SetStateAction<boolean>>
  userId?: string;
}

export default function MusicCardPortal({ id, name, handlePortal, userId }: IProps) {
  const { data } = useQuery<GetUserById>(GET_USER_BY_ID);
  const [playlist, handlePlaylist] = useState(true);
  const { getDownloadUrl } = useDownload();
  const { handleDelete } = useDelete();
  return (
    <div className={Style.music_portal}>
      {playlist
        ? <div className={Style.container}>
          <div className={Style.container_title}>
            <h1>{name}</h1>
            <button onClick={() => handlePortal(false)} className={Style.close_portal}>X</button>
          </div>
          <PortalButton tittle={'Add playlist'} onClick={() => handlePlaylist(!playlist)} img={addIcon}/>
          <PortalButton tittle='Download' onClick={() => getDownloadUrl(id, name)} img={downloadIcon}/>
          {userId === data?.getUserById.email 
          && <PortalButton tittle='Delete' onClick={() => handleDelete(id)} img={trashIcon}/>}
        </div>
        : <AddPlaylist id={id} name={name} handlePortal={handlePortal} handlePlaylist={handlePlaylist}/>}
    </div>
  );
}

interface IPortalButton {
  tittle: string;
  onClick: any;
  img: string
}

const PortalButton = ({ tittle, onClick, img }: IPortalButton) => {
  return (
    <div className={Style.button} onClick={onClick}>
      <img src={img} alt={tittle} />
      <button>{tittle}</button>
    </div>
  );
};