import { useEffect, useState, useRef } from 'react';
import { useQuery } from '@apollo/client';
import { IMusicPaginate, IMusicPaginateProps } from '../../types/music/music';
import { GET_ALL_MUSIC } from '../../services/graphql/query/music/getAllMusic';
import { useDispatch, useSelector } from 'react-redux';
import { getFiltered, getMusic } from '../../state/features/musicSlice';
import { MusicState } from '../../state/store';


export const useGetMusic = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: MusicState) => state.music);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const container = useRef<HTMLDivElement>(null);
  const { fetchMore } = useQuery<IMusicPaginate, IMusicPaginateProps>(GET_ALL_MUSIC, { 
    variables: { page: page, size: 20 },
    pollInterval: 1800000
  });

  const handleScroll = async () => {
    const divElement = container.current;
    if (!divElement) return;
    const { scrollLeft, clientWidth, scrollWidth } = divElement;
    const isNearEnd = scrollLeft + clientWidth >= scrollWidth - 600;

    try {
      if (isNearEnd) {
        setPage(prevPage => prevPage + 1);
      }
    } catch (error) {
      setHasMore(false);
    }
  };
  useEffect(() => {

    const divElement = container.current;
    if (!divElement || !hasMore) return;
  
    const fetchData = async () => {
      try {
        const newData = await fetchMore({ variables: { page: page, size: 20 } });
        dispatch(getMusic([...state.data, ...newData.data.getPaginateMusic]));
        dispatch(getFiltered([...state.data, ...newData.data.getPaginateMusic]));
      } catch (error) {
        setHasMore(false);
      }
    };
  
    const handleScrollDebounced = debounce(handleScroll, 200);
  
    divElement.addEventListener('scroll', handleScrollDebounced);
  
    fetchData();
  
    return () => {
      divElement.removeEventListener('scroll', handleScrollDebounced);
      dispatch(getMusic([]));
    };
  }, [page, hasMore]);
  return { data: state.filtered, container };
};

function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
