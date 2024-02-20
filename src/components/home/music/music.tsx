import Style from './music.module.css';
import SongCard from '../../songCard/songCard';
import { useGetMusic } from '../../../utils/hooks/music/useGetMusic';
import { IMusic } from '../../../utils/types/music/music';

export default function Music() {
  const { data, container } = useGetMusic();

  if (!data) return <p>Loading...</p>;

  return (
    <section className={Style.music_container}>
      <h1>New songs!</h1>
      <div className={Style.music} id='new-music' ref={container}>
        {data?.map((music: IMusic) => (
          <SongCard key={music.id} music={music}/>
        ))}
      </div>
    </section>
  );
}