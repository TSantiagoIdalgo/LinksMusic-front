import Style from './userPlaylist.module.css';
import playIcon from '../../../assets/icons/player/play.png';
import { useQuery } from '@apollo/client';
import { NavLink } from 'react-router-dom';
import { GET_USER_PLAYLIST, UserPlaylist } from '../../../utils/services/graphql/query/playlist/getUserPlaylist';

const Playlists = () => {
  const { data, loading, error } = useQuery<UserPlaylist>(GET_USER_PLAYLIST);
  if (loading || !data || data.getUserPlaylist.length === 0 || error) return null;

  return (
    <div className={Style.container}>
      {data.getUserPlaylist.map(playlist => (
        <NavLink to={`/linksmusic/playlist?playlist=${playlist.id}`} key={playlist.id} className={Style.playlist}>
          <h2>{playlist.tittle}</h2>
          <img src={playIcon} alt={playlist.tittle} />
        </NavLink>
      ))}
    </div>
  );
};

export default Playlists;