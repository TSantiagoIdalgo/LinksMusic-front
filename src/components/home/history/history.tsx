import Style from './history.module.css';
import Card from '../../card/card';
import HistoryPlaylist from './historyPlaylist/historyPlaylist';
import HistoryMusic from './historyMusic/historyMusic';
import userIcon from '../../../assets/icons/user-icon.png';
import { IUserHistory, GET_USER_HISTORY } from '../../../utils/services/graphql/query/user/history';
import { useQuery } from '@apollo/client';

export default function History () {
  const { data, loading, error } = useQuery<IUserHistory>(GET_USER_HISTORY);

  if (error) return <p>Error: { error.message }</p>;
  if (loading || !data?.getUserHistory) return <p>Loading...</p>;
  const { user, history } = data.getUserHistory;

  return (
    <section className={Style.history}>
      <div className={Style.user}>
        <img src={user.image ? user.image : userIcon } className={user.image ? Style.userImg : Style.undefImg} alt="user" />
        <div className={Style.userText}>
          <span>{data.getUserHistory.user.userName}</span>
          <h2>Listen again</h2>
        </div>
      </div>
      <div className={Style.historyCards}>
        {history.map(({ album, music, playlist}) => {
          if (album !== null) return <Card key={album.id} name={album.name} id={album.id} author={album.author} image={album.image}/>;
          if (playlist !== null) return <HistoryPlaylist key={playlist.id} playlist={playlist}/>;
          if (music !== null) return <HistoryMusic key={music.id} music={music}/>;
        })}
      </div>
    </section>
  );
}