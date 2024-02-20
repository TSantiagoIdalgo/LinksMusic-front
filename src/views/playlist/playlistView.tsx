import Style from './playlistView.module.css';
import SongCard from '../../components/songCard/songCard';
import PlaylistHeader from '../../components/playlistHeader/playlistHeader';
import { useQueryURL } from '../../utils/hooks/common/useQueryURL';
import { useGetPlaylistMusic } from '../../utils/hooks/playlist/useGetPlaylist';


export default function PlaylistView () {
  const { queryURL } = useQueryURL('playlist');
  const { error, loading, music } = useGetPlaylistMusic(queryURL);
  if (error) return <p>Error: {error.message}</p>;
  if (loading || !music) return <p>Loading...</p>;

  return (
    <section className={Style.playlistView}>
      <PlaylistHeader music={music} query={queryURL}/>
      <div className={Style.playlistCards}>
        {music.map((music => (
          <SongCard key={music.id} music={music} extend style={{width: '80%'}}/>
        )))}
      </div>
    </section>
  );
}
