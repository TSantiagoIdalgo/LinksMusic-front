import Style from './Play.module.css';
import React from 'react';
import { useRef, useEffect, useState } from 'react';

interface IPlayControlls {
  currentTime: string;
  newTime: (e: any) => void;
  time: string;
}

export default function PlayControlls ({ currentTime, newTime, time }: IPlayControlls) {
  const [backgroundWidth, setBackgroundWidth] = useState(0);
  const [hoverValue, setHoverValue] = useState<string | null>(null);
  const rangeRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (rangeRef.current === null) return;
    const range = rangeRef.current;
    const value = parseInt(range.value);
    const min = parseInt(range.min) || 0;
    const max = parseInt(range.max) || 100;
    const percentage = ((value - min) / (max - min)) * 100;
    const thumbPosition = (range.offsetWidth * percentage) / 100;
    setBackgroundWidth(thumbPosition);
  }, [currentTime]);

  const handleHover = (e: React.MouseEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    const value = (percentage / 100) * (parseFloat(target.max) - parseFloat(target.min)) + parseFloat(target.min);
    setHoverValue(value.toFixed(2));
    const divHover = document.getElementById('hoverTime');
    if (divHover) {
      divHover.style.left = `${e.clientX}px`;
    }
  };

  function secondsToMinutes(seg: string) {
    const segundos = parseInt(seg);
    const minutes = Math.floor(segundos / 60);
    const seconds = segundos % 60;
    return `${minutes}:${seconds}`;
  }
  return (
    <div className={Style.time}>
      <input 
        className={Style.time_input} 
        type="range" 
        value={parseInt(currentTime)} 
        onChange={newTime}
        onMouseMove={handleHover}
        onMouseLeave={() => setHoverValue(null)}
        max={time}
        min={0}
        step={0.1}
        ref={rangeRef}
      />
      {hoverValue !== null && <span id='hoverTime' className={Style.hoverTime}>{secondsToMinutes(hoverValue)}</span>}
      <div className={Style.principal_time} style={{width: `${backgroundWidth}px`}} />
    </div>
  );
}
