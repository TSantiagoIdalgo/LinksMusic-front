import { gql } from '@apollo/client';
import Style from './playlistLibrary.module.css';
import { useQuery } from '@apollo/client';
import HistoryPlaylist from '../../../components/home/history/historyPlaylist/historyPlaylist';
import { useWindowSize } from '../../../utils/hooks/window/useWindow';
import { IMusic } from '../../../utils/types/music/music';

const GET_PLAYLIST_USER = gql`
query {
    getUserPlaylist {
      id
      tittle
      userId
      music {
        id
        image
      }
    }
  }
`;

interface PlaylistUser {
  getUserPlaylist: {
    id: string;
    tittle: string;
    userId: string;
    music: IMusic[]
  }[]
}

export default function PlaylistLibrary() {
  const width = useWindowSize();
  const { data, loading, error} = useQuery<PlaylistUser>(GET_PLAYLIST_USER);
  if (error) return <p>Error: { error.message }</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div className={Style.playlistLibrary}>
      {data?.getUserPlaylist.map((playlist) => 
        <HistoryPlaylist key={playlist.id} playlist={playlist} style={{width: `${width <= 800 ? '100%' : '330px'}`}}/>)}
    </div>
  );
}