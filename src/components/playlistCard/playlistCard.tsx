import Style from './playlistCard.module.css';
import { IMusic } from '../../utils/types/music/music';
import undefIcon from '../../assets/icons/player/undefinedIcon.png';

interface IPlaylistCardProps {
    image?: IMusic[];
}

const PlaylistCard = ({ image }: IPlaylistCardProps) => {
  if (!image) {
    return <p>No images available</p>;
  }
  return (
    <div className={image.length === 0? Style.undef_container : `${image.length === 1 ? Style.playlist_info_i : Style.playlist_info_img}`}>
      {image.map((music, index) => (
        <div key={index} className={Style.images}>
          {music.image !== null
            ? <img src={music.image} alt={music.name} className={Style.playlist_info_image}/>
            : <img src={undefIcon} alt='undef' className={Style.playlist_info_undef}/>
          }
        </div>
      ))}
    </div>
  );
};


export default PlaylistCard;