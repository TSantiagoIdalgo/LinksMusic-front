import Style from './playlistHeader.module.css';
import PlaylistCard from '../playlistCard/playlistCard';
import PlaylistInfo from './playlistInfo/playlistInfo';
import PlaylistEdit from './playlistEdit/playlistEdit';
import { GET_USER_BY_ID, GetUserById } from '../../utils/services/graphql/query/user/getById';
import { useQuery } from '@apollo/client';
import { IMusic } from '../../utils/types/music/music';
import { IPlaylistById, GET_PLAYLIST_BY_ID, IPlaylistByIdProps } from '../../utils/services/graphql/query/playlist/getPlaylistById';
import { useState } from 'react';

interface IPlaylistHeader {
  music: IMusic[];
  query: string
}

const PlaylistHeader = ({ music, query }: IPlaylistHeader) => {
  const [edit, handleEdit] = useState(false);
  const user = useQuery<GetUserById>(GET_USER_BY_ID);
  const { data } = useQuery<IPlaylistById, IPlaylistByIdProps>(GET_PLAYLIST_BY_ID, {
    variables: { getPlaylistByIdId: query }
  });
  if (!data?.getPlaylistById) return <p>Loading...</p>;
  const totalDuration = music.reduce((acc, curr) => acc + parseInt(curr.duration), 0);
  const { id, description, userId, dislikes, likes, tittle } = data.getPlaylistById;
  function formatTime() {
    if (!totalDuration) return;
    const seg = parseInt(totalDuration.toString());
    const minutes = Math.floor(seg / 60);
    const seconds = seg % 60;
    return `${minutes} minutes and ${seconds} seconds`;
  }

  return (
    <div className={Style.playlistHeader}>
      <PlaylistCard image={music}/>
      {edit && user.data?.getUserById.email === userId
        ? <PlaylistEdit
          id={id}
          tittle={tittle} 
          description={description} 
          music={music.length} 
          userId={userId} 
          time={formatTime()} 
          dislikes={dislikes}
          likes={likes}
          handleEdit={handleEdit}/>
        : <PlaylistInfo 
          id={id}
          tittle={tittle} 
          description={description} 
          music={music.length} 
          userId={userId} 
          time={formatTime()} 
          dislikes={dislikes}
          likes={likes}
          handleEdit={handleEdit}/>}
    </div>
  );
};



export default PlaylistHeader;