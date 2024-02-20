import History from './history/history';
import Music from './music/music';
import Album from './album/album';
import PlaylistSection from './playlist/playlist';

export default function Home () {
  const token = window.localStorage.getItem('USER_INFO')||window.sessionStorage.getItem('USER_INFO');
  return (
    <section>
      {token && <History/>}
      <Music/>
      <Album/>
      <PlaylistSection/>
    </section>
  );
}