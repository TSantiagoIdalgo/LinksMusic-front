import Style from './addCard.module.css';
import { useUploadByVideo } from '../../../utils/hooks/music/useUpload';

export default function AddCard() {
  const { Upload, uploading, data } = useUploadByVideo();
  if (!data) return <p>No data</p>;
  return (
    <div className={Style.videoData}>
      <img src={data.image} alt={data.name} />
      <div className={Style.videoData_title}>
        <h2>{data.title}</h2>
        <h2>{data.album}</h2>
        <div className={Style.videoData_buttons}>
          <button >Download</button>
          <button disabled={uploading} onClick={Upload} type='button'>
            { uploading ? 'Uploading' : 'Upload' }
          </button>
        </div>
      </div>
    </div>
  );
}