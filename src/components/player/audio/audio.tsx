import Style from './audio.module.css';
import volumeIcon from '../../../assets/icons/player/volume.png';
import { useState, useEffect, useRef } from 'react';

interface IAudio {
    volumeChange(e: React.ChangeEvent<HTMLInputElement>): void
    volume: number
}

export default function Audio({ volumeChange, volume }: IAudio) {
  const [visible, setVisible] = useState(false);
  const [backgroundWidth, setBackgroundWidth] = useState(0);
  const rangeRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (rangeRef.current === null) return;
    const range = rangeRef.current;
    const value = parseFloat(range.value);
    const min = parseFloat(range.min) || 0;
    const max = parseFloat(range.max) || 100;
    const percentage = ((value - min) / (max - min)) * 100;
    const thumbPosition = (range.offsetWidth * percentage) / 100;
    setBackgroundWidth(thumbPosition);
  }, [volume]);
  return (
    <div className={Style.audio} onClick={() => setVisible(!visible)}>
      <div className={Style.audio_change}>
        <img src={volumeIcon} alt="volue" />
        <input
          ref={rangeRef}
          type='range' 
          value={volume} 
          step={0.01} 
          min={0} 
          max={1} 
          onChange={volumeChange}
          style={{visibility: `${visible ? 'visible' : 'hidden'}`}}/>
        <div className={Style.audio_range} style={{width: `${backgroundWidth}px`, visibility: `${visible ? 'visible' : 'hidden'}`}}/>
      </div>
    </div>
  );
}