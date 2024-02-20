import Style from './controls.module.css';
import playIcon from '../../../assets/icons/player/play.png';
import pauseIcon from '../../../assets/icons/player/pause.png';
import prevIcon from '../../../assets/icons/player/prev.png';
import nextIcon from '../../../assets/icons/player/next.png';
import PlayControlls from './play/Play';
import { IMusic } from '../../../utils/types/music/music';
import { useNext, usePrev } from '../../../utils/hooks/player/useNext';

interface IControls {
    time: string;
    currentTime: string;
    playing: boolean;
    togglePlay(): void;
    newTime(e: React.ChangeEvent<HTMLInputElement>): void;
    music: IMusic;
}

export default function Controls (props: IControls) {
  const { time, currentTime, playing, togglePlay, newTime, music } = props;
  const { nextSong } = useNext(music);
  const { prevSong } = usePrev(music);
  function secondsToMinutes(seg: string) {
    const segundos = parseInt(seg);
    const minutes = Math.floor(segundos / 60);
    const seconds = segundos % 60;
    return `${minutes}:${seconds}`;
  }
  
  return (
    <div className={Style.controls}>
      <div className={Style.buttons}>
        <span className={Style.buttons_time}>{secondsToMinutes(currentTime)}</span>
        <img src={prevIcon} alt='prev' className={Style.button_prev} onClick={prevSong}/>
        <button onClick={togglePlay} className={Style.button_play}>
          {playing 
            ? <img src={pauseIcon} alt="pause" />
            : <img src={playIcon} alt="play" />}
        </button>
        <img src={nextIcon} alt='next' className={Style.button_next} onClick={nextSong}/>
        <span className={Style.buttons_time}>{secondsToMinutes(time)}</span>
      </div>
      <PlayControlls currentTime={currentTime} newTime={newTime} time={time}/>
    </div>

  );
}

