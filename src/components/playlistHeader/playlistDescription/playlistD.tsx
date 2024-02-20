import Style from './playlistD.module.css';
import likeIcon from '../../../assets/icons/playlist/like-regular-240.png';
import dislikeIcon from '../../../assets/icons/playlist/dislike-regular-240.png';
import dislikeSolidIcon from '../../../assets/icons/playlist/dislike-solid-240.png';
import likeSolidIcon from '../../../assets/icons/playlist/like-solid-240.png';

interface PlaylistD{
  likes: number;
  dislikes: number;
  music: number;
  time?: string;
  userId: string;
  isLike?: boolean;
  isDislike?: boolean;
  handleLike(action: any): Promise<void>
}

export default function PlaylistD (props: PlaylistD) {
  const { isLike, isDislike, likes, dislikes, music, time, userId, handleLike } = props;
  return (
    <div className={Style.playlist_text}>
      <div className={Style.playlistData}>
        <div className={Style.likes}>
          <div className={Style.like} onClick={() => handleLike('likes')}>
            <img src={isLike !== undefined && isLike? likeSolidIcon : likeIcon} alt="like" />
            <span>{likes}</span>
          </div>
          <div className={Style.like} onClick={() => handleLike('dislikes')}>
            <img src={isDislike !== undefined && isDislike ? dislikeSolidIcon : dislikeIcon} alt="dislike" />
            <span>{dislikes}</span>
          </div>
        </div>
        <div>
          <span>{music} songs</span>
          <span> • </span>
          <span>{time}</span>
        </div>
      </div>
      <h3 className={Style.userId}>{userId.split('@')[0]}</h3>
    </div>
  );
}