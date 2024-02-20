import { useQuery } from '@apollo/client';
import Style from './musicLibrary.module.css';
import HistoryMusic from '../../../components/home/history/historyMusic/historyMusic';
import { gql } from '@apollo/client';
import { IMusic } from '../../../utils/types/music/music';
import { useWindowSize } from '../../../utils/hooks/window/useWindow';

const USER_MUSIC = gql`
  query {
    getUserMusic {
      id, 
      name, 
      album, 
      image, 
      duration
    }
}
`;

interface UserMusic {
    getUserMusic: IMusic[]
}

export default function MusicLibrary () {
  const { data, loading, error } = useQuery<UserMusic>(USER_MUSIC);
  const width = useWindowSize();
  if (error) return <p>Error: { error.message }</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div className={Style.musicLibrary}>
      {data?.getUserMusic.map(music => 
        <HistoryMusic key={music.id} music={music} style={{width: `${width <= 800 ? '100%' : '300px'}`}}/>)}
    </div>
  );
}