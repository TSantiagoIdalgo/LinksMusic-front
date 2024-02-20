import { useState } from 'react';
import Style from './library.module.css';
import PlaylistLibrary from './playlist/playlistLibrary';
import MusicLibrary from './music/musicLibrary';

export default function Library() {
  const [handleView, setHandleView] = useState(true);
  return (
    <section className={Style.library}>
      <div className={Style.library_button}>
        <button onClick={() => setHandleView(true)}>Playlist</button>
        <button onClick={() => setHandleView(false)}>Music</button>
      </div>
      {handleView ? <PlaylistLibrary/> : <MusicLibrary/>}
    </section>
  );
}