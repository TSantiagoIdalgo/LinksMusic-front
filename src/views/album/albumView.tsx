import Header from '../../components/album/albumHeader/albumHeader';
import Style from './albumView.module.css';
import { useGetAlbum } from '../../utils/hooks/album/useGetAlbum';
import SongCard from '../../components/songCard/songCard';

export default function AlbumView() {
  const { data, error, musicImg, time } = useGetAlbum();

  if (error) return <p>Error: {error.message}</p>;
  if (!data || !musicImg || !time) return <p>Loading...</p>;

  return (
    <main className={Style.container}>
      <Header data={data} musicImg={musicImg} time={time}/>
      <section className={Style.card}>
        {data.music.map((song) => (
          <SongCard 
            key={song.id} 
            music={song}
            style={{ width: '80%' }}
            extend
          />
        ))}
      </section>
    </main>
  );
}