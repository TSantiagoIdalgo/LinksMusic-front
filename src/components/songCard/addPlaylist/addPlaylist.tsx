import Style from './addPlaylist.module.css';
import { useQuery } from '@apollo/client';
import { GET_USER_PLAYLIST, UserPlaylist } from '../../../utils/services/graphql/query/playlist/getUserPlaylist';
import AddButton from '../addButton/addButon';

interface Props {
    id: `${string}-${string}-${string}-${string}-${string}`;
    name: string;
    handlePortal: React.Dispatch<React.SetStateAction<boolean>>
    handlePlaylist: React.Dispatch<React.SetStateAction<boolean>>
}


const AddPlaylist = ({ id, name, handlePortal, handlePlaylist }: Props) => {
  const playlist = useQuery<UserPlaylist>(GET_USER_PLAYLIST);

  return (
    <div className={Style.playlist}>
      <div className={Style.container_title}>
        <button className={Style.close_portal} onClick={() => handlePlaylist(true)}>{'<'}</button>
        <h1>{name}</h1>
        <button className={Style.close_portal} onClick={() => handlePortal(false)}>X</button>
      </div>
      <div>
        {!playlist.data 
          ? <h2>Not playlist found</h2>
          : <>
            {playlist.data.getUserPlaylist.map(item => (
              <AddButton key={item.id} playlist={item} id={id}/>
            ))}</>}
      </div>
    </div>
  );
};


export default AddPlaylist;