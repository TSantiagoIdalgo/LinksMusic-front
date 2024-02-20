import { IMusic } from '../../../../utils/types/music/music';
import { usePlayCurrent } from '../../../../utils/hooks/music/usePlayCurrent';
import Style from './historyMusic.module.css';
import undefinedIcon from '../../../../assets/icons/player/undefinedIcon.png';
import secondsToMinutes from '../../../../utils/helpers/timeFormat';
import { CSSProperties } from 'react';

interface ISongCard {
  music: IMusic,
  style?: CSSProperties
  extend?: boolean
}

export default function HistoryMusic({ music, style }: ISongCard) {
  const { id, name, album, image, duration } = music;
  const { getMusic } = usePlayCurrent(music, id);

  return (
    <figure className={Style.container} onClick={getMusic} style={style}>
      <img src={image ? image : undefinedIcon} className={image ? Style.image : Style.notImage} alt={name} />
      <h2>{name}</h2>
      <div>
        <span>{album}</span>
        <span> • </span>
        <span>{secondsToMinutes(duration)}</span>
      </div>
    </figure>
  );
}