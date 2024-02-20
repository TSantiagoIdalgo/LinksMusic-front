import Style from './player.module.css';
import Audio from './audio/audio';
import Controls from './controls/controls';
import PlayData from './playData/playData';
import { useRef } from 'react';
import { useNext } from '../../utils/hooks/player/useNext';
import { UsetogglePlay, useControlls } from '../../utils/hooks/player/useControlls';

export default function Player () {
  const audioRef = useRef(null);
  const { currentTime, data, newTime } = useControlls(audioRef);
  const { togglePlay, playing, volume, volumeChange } = UsetogglePlay(audioRef);
  const { nextSong } = useNext(data);
  if (data === null || data === undefined) return <></>;

  return (
    <div className={Style.container}>
      <audio ref={audioRef} src={data.url} autoPlay onEnded={nextSong}/>
      <PlayData image={data.image} name={data.name}/>
      <Controls 
        time={data.duration} 
        currentTime={currentTime.toString()} 
        playing={playing} 
        togglePlay={togglePlay}
        newTime={newTime}
        music={data}
      />
      <Audio
        volumeChange={volumeChange}
        volume={volume}/>
    </div>
  );
}