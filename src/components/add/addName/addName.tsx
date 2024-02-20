import Style from './addName.module.css';
import { useSearchYoutube } from '../../../utils/hooks/common/useSearchYoutube';
import CardName from './cardName/cardName';

export default function AddName() {
  const { searchYoutube, setSearch, clean, search, items, error } = useSearchYoutube();
  return (
    <form className={Style.addUrl} onSubmit={(e) => e.preventDefault()}>
      <div className={Style.addUrl_input}>
        <input 
          type="text" 
          placeholder='Search by name' 
          value={search}
          onChange={(e) => setSearch(e.target.value)} />
        <button className={Style.addUrl_submit} type='button' onClick={searchYoutube}>Submit</button>
        <button className={Style.addUrl_clean} type='button' onClick={clean}>X</button>
        <span className={Style.addUrl_error}>{error}</span>
      </div>
      <div className={Style.urlCard}>
        {items.length > 0 && items.map(({ channel, videoId, videoThumbnail, videoTitle}) => (
          <CardName 
            key={videoId} 
            channel={channel} 
            videoThumbnail={videoThumbnail} 
            videoTitle={videoTitle}
            videoId={videoId}/>
        ))}
      </div>
    </form>
  );
}