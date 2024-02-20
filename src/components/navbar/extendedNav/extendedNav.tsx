import React from 'react';
import Style from './extendedNav.module.css';
import homeIcon from '../../../assets/icons/player/home.png';
import libraryIcon from '../../../assets/icons/player/library.png';
import addIcon from '../../../assets/icons/player/add.png';
import newIcon from '../../../assets/icons/player/new.png';
import { useNavigate, useLocation } from 'react-router-dom';
import Playlists from '../../sidebar/playlist/userPlaylist';

interface IExtendedNav {
  handleExtend: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ExtendedNav({ handleExtend }: IExtendedNav) {
  return (
    <div className={Style.extended}  onMouseLeave={() => handleExtend(false)}>
      <button className={Style.extendedButton} onClick={() => handleExtend(false)}>X</button>
      <div className={Style.sidebar_gruop}>
        <ExtendButton img={homeIcon} text={'Home'} type='button' navigate={'/linksmusic/home'}/>
        <ExtendButton img={libraryIcon} text={'Library'} type='button' navigate={'/linksmusic/library'}/>
        <ExtendButton img={addIcon} text={'Add song'} type='button' navigate={'/linksmusic/addsong'}/>
        <div className={Style.sidebar_middle}/>
        <ExtendButton img={newIcon} text={'New playlist'} type='button' navigate={'/linksmusic/newplaylist'}/>
        <Playlists/>
      </div>
    </div>
  );
}

interface IExtendButton {
  text: string,
  type: 'button',
  navigate: string,
  style?: React.CSSProperties,
  img?: string
}

function ExtendButton({ text, type, navigate, style, img }: IExtendButton) {
  const navigateClick = useNavigate();
  const location = useLocation().pathname;
  
  return <div className={Style.button_container}>
    { img && <img src={img} alt="" className={Style.img} /> }
    <button 
      className={`${location.includes(navigate)
        ? Style.button_active
        : Style.button}`} 
      onClick={() => navigateClick(navigate)} 
      type={type}
      style={style}>{text}</button>
  </div>;
}