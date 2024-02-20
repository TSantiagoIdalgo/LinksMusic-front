import { IMusic } from '../../utils/types/music/music';
import { usePlayCurrent } from '../../utils/hooks/music/usePlayCurrent';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import MusicCardPortal from './songPortal/songPortal';
import Style from './songCard.module.css';
import undefinedIcon from '../../assets/icons/player/undefinedIcon.png';
import secondsToMinutes from '../../utils/helpers/timeFormat';
import { useWindowSize } from '../../utils/hooks/window/useWindow';
import { CSSProperties } from 'react';

interface ISongCard {
  music: IMusic,
  style?: CSSProperties
  extend?: boolean
}

export default function SongCard({ music, style, extend }: ISongCard) {
  const [portal, handlePortal] = useState(false);
  const { id, name, album, image, duration, userId } = music;
  const { getMusic } = usePlayCurrent(music, id);
  const width = useWindowSize();

  return (
    <div className={Style.container} style={width >=1024? style : {width: '100%'}}>
      <figure className={Style.cardMusic} title={name} onClick={getMusic}>
        <div className={Style.card_tittle}>
          <img src={image?image:undefinedIcon} className={image?Style.image:Style.undef}  alt={name}/>
          {extend && width >= 1024
            ? <h2 className={Style.tittle}>{name}</h2>
            : <div className={Style.card_tittle_data }>
              <h2>{name}</h2>
              <h3>{album}</h3>
            </div>}
        </div>
        {extend  && width >= 1024 ? <h2 className={Style.album}>{album}</h2> : null}
        <div className={Style.card_time}>
          <h3>{secondsToMinutes(duration)}</h3>
          <span onClick={() => handlePortal(true)}>...</span>
        </div>
      </figure>
      {portal && document.getElementById('portal')
        ? ReactDOM.createPortal(
          <MusicCardPortal 
            handlePortal={handlePortal} 
            id={id} 
            name={name}
            userId={userId}/>, 
            document.getElementById('portal') as Element)
        : null}
    </div>
  );
}