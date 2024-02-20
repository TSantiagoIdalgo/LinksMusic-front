import Style from './playlist.module.css';
import PlaylistCard from '../../playlistCard/playlistCard';
import { NavLink } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { 
  GET_ALL_PLAYLIST, 
  IGetPlaylist, 
  IGetPlaylistProps } from '../../../utils/services/graphql/query/music/getPlaylistMusic';

export default function PlaylistSection() {
  const { data, loading, error } = useQuery<IGetPlaylist, IGetPlaylistProps>(GET_ALL_PLAYLIST, {
    variables: { page: 1, size: 10 }
  });
  if (loading || !data?.getAllPlaylist) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className={Style.playlist_container}>
      <h2>Playlist</h2>
      <div className={Style.card_container}>
        {data.getAllPlaylist.map((playlist) => (
          <NavLink to={`/linksmusic/playlist?playlist=${playlist.id}`} key={playlist.id} className={Style.playlist} title={playlist.tittle}>
            <PlaylistCard image={playlist.music}/>
            <h2>{playlist.tittle}</h2>
            <div className={Style.playlist_text}>
              <span>{playlist.userId.split('@')[0]}</span>
              <span> • </span>
              <span>{playlist.music.length} songs</span>
            </div>
          </NavLink>
        ))}
      </div>
    </section>
  );
}