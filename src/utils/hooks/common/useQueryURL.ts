import { useLocation } from 'react-router-dom'; 

export const useQueryURL = (query: string) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const queryURL = params.get(query) ?? '';

  return { queryURL };
};