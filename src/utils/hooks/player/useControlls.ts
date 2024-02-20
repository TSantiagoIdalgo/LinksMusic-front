import { useEffect, useState, useCallback  } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPlay } from '../../state/features/playingSlice';
import { PlayState } from '../../state/store';
import React from 'react';

export const useControlls = (audioRef: React.MutableRefObject<HTMLAudioElement | null>) => {
  const {data} = useSelector((state: PlayState) => state.play);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if ( data === null || audioRef?.current === null) return;
    const audio = audioRef.current;
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleProgress = () => setProgress(audio.duration);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('durationchange', handleProgress);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('durationchange', handleProgress);
    };
  },[data]);

  const newTime = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if ( data === null || audioRef.current === null) return;
    const newTime = e.target.value;
    audioRef.current.currentTime = parseInt(newTime);
    setCurrentTime(parseInt(newTime));
    
  },[data]);
    

  return { currentTime, progress, data, newTime };
};

export const UsetogglePlay = (audioRef: React.MutableRefObject<HTMLAudioElement | null>) => {
  const dispatch = useDispatch();  
  const { playing } = useSelector((state: PlayState) => state.play);
  const [volume, setVolume] = useState(1);
  const { data } = useSelector((state: PlayState) => state.play);
  const togglePlay = useCallback(() => {
    if ( data === null || audioRef.current === null) return;
    const audio = audioRef.current;

    if (audio.paused) {
      audio.play();
      dispatch(setPlay(true));
    } else {
      audio.pause();
      dispatch(setPlay(false));
    }
  }, [data, audioRef.current]);

  const volumeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if ( data === null || audioRef.current === null) return;
    const newVolume = e.target.value;

    audioRef.current.volume = parseFloat(newVolume);
    setVolume(parseFloat(newVolume));
  }, [data]);

  return { togglePlay, playing, volume, volumeChange };
};