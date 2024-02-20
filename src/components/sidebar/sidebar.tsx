import Style from './sidebar.module.css';
import ThirdButton from '../buttons/thirdButton/thirdButton';
import Playlists from './playlist/userPlaylist';
import homeIcon from '../../assets/icons/player/home.png';
import libraryIcon from '../../assets/icons/player/library.png';
import addIcon from '../../assets/icons/player/add.png';
import newIcon from '../../assets/icons/player/new.png';


export default function SideBar () {
  const token = window.localStorage.getItem('USER_INFO')||window.sessionStorage.getItem('USER_INFO');
  return (
    <section className='sidebar'>
      <div className={Style.sidebar_gruop}>
        <ThirdButton img={homeIcon} text={'Home'} type='button' navigate={'/linksmusic/home'}/>
        {token
          ? <>
            <ThirdButton img={libraryIcon} text={'Library'} type='button' navigate={'/linksmusic/library'}/>
            <ThirdButton img={addIcon} text={'Add song'} type='button' navigate={'/linksmusic/addsong'}/>
            <div className={Style.sidebar_middle}/>
            <ThirdButton img={newIcon} text={'New playlist'} type='button' navigate={'/linksmusic/newplaylist'}/>
            <Playlists/>
          </>
          : <>
            <div className={Style.sidebar_middle}/>
            <button className={Style.login_button} onClick={() => window.location.href = '/linksmusic/login'}>Login</button>
          </>}
      </div>
    </section>
  );
}