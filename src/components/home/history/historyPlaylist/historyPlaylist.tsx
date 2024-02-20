import Style from './historyPlaylist.module.css';
import { NavLink } from 'react-router-dom';
import { IMusic } from '../../../../utils/types/music/music';
import PlaylistCard from '../../../playlistCard/playlistCard';
import { CSSProperties } from 'react';

interface IProps {
  playlist: {
    id: string;
    tittle: string;
    userId: string;
    music: IMusic[];
  },
  style?: CSSProperties
}

export default function HistoryPlaylist({ playlist, style }: IProps) {
  return (
    <NavLink to={`/linksmusic/playlist?playlist=${playlist.id}`} className={Style.playlist} title={playlist.tittle} style={style}>
      <PlaylistCard image={playlist.music}/>
      <h2>{playlist.tittle}</h2>
      <div>
        <span>{playlist.userId.split('@')[0]}</span>
        <span> • </span>
        <span>{playlist.music.length} songs</span>
      </div>
    </NavLink>
  );
}