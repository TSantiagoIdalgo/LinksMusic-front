import axios from 'axios';
import { useState } from 'react';

interface ISearchYoutube {
  videoId: string;
  videoTitle: string;
  videoThumbnail: string;
  channel: string;
}

interface IUseSearchYoutube {
    items: ISearchYoutube[];
}

export const useSearchYoutube = () => {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState<ISearchYoutube[]>([]);
  const [error, setError] = useState('');
  const apiKey = 'AIzaSyBAhFLO8-6FfwA3ow0FuVWtdsWVggBmZec';

  async function searchYoutube() {
    setItems([]);
    try {
      const response = await axios.get<IUseSearchYoutube>('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          type: 'video',
          videoCategoryId: '10',
          q: search,
          maxResults: 5,
          key: apiKey,
        },
      });
      response.data?.items?.map((item: any) => {
        const videoId = item.id.videoId;
        const videoTitle = item.snippet.title;
        const videoThumbnail = item.snippet.thumbnails.default.url;
        const channel = item.snippet.channelTitle;
        setItems(prevItems => [...prevItems, { videoId, videoTitle, videoThumbnail, channel }]);
      });
    } catch (error: any) {
      setError(error.message);
    }
  }

  const clean = () => {
    setSearch('');
    setItems([]);
    setError('');
  };

  return { searchYoutube, setSearch, clean, search, items, error };
};