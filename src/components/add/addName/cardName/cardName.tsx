import Style from './cardName.module.css';
import { useUploadByName } from '../../../../utils/hooks/music/useUpload';

interface Props {
    channel: string;
    videoId: string;
    videoThumbnail: string;
    videoTitle: string;
}

export default function CardName({ channel, videoId, videoThumbnail, videoTitle }: Props) {
  const { Upload, uploading } = useUploadByName();

  return (
    <figure key={videoId} className={Style.card} title={videoTitle}>
      <img src={videoThumbnail} alt={channel} />
      <div className={Style.cardText}>
        <h2>{videoTitle}</h2>
        <h3>{channel}</h3>
      </div>
      <button 
        disabled={uploading} 
        onClick={() => Upload(videoId)}>
        {uploading ? 'Uploading' : 'Upload'}
      </button>
    </figure>
  );
}