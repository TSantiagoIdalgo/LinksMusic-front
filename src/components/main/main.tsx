import { useParams, Navigate } from 'react-router-dom';
import Home from '../home/home';
import Add from '../../views/add/add';
import AlbumView from '../../views/album/albumView';
import PlaylistView from '../../views/playlist/playlistView';
import CreatePlaylist from '../../views/createPlaylist/createPlaylist';
import Library from '../../views/library/library';

export default function MainSection () {
  const { id } = useParams();
  const locationRender = () => {
    switch (id) {
    case 'home': return <Home/>;
    case 'addsong': return <Add/>;
    case 'album': return <AlbumView/>;
    case 'playlist': return <PlaylistView/>;
    case 'newplaylist': return <CreatePlaylist/>;
    case 'library': return <Library/>;
    default:return <Navigate to="/linksmusic/home"/>;
    }
  };
  return (
    <section className='main'>
      {locationRender()}
    </section>
  );
}