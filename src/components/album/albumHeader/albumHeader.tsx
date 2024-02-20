import Style from './albumHeader.module.css';
import playIcon from '../../../assets/icons/player/play.png';
import { IMusic } from '../../../utils/types/music/music';

interface IAlbum {
  id: string;
  name: string
  author: string;
  music: IMusic[]
}

interface AlbumHeaderProps {
  musicImg: IMusic | undefined;
  time: string | undefined;
  data: IAlbum;
}

export default function Header({ musicImg, time, data }: AlbumHeaderProps) {
  return (
    <section className={Style.album}>
      <article className={Style.album_header}>
        <img src={musicImg?.image} alt={musicImg?.name} />
        <div className={Style.album_header_data}>
          <h2>{data?.name}</h2>
          <h2>{data?.author}</h2>
          <div className={Style.album_header_info}>
            <span>{data.music.length} songs</span>
            <span>•</span>
            <span>{time}</span>
          </div>
          <button className={Style.album_button}>
            <img src={playIcon} alt="playicon" />
            <span>Play</span>
          </button>
        </div>
      </article>
    </section>
  );

}