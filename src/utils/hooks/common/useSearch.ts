import { useLazyQuery } from '@apollo/client';
import React, { useState } from 'react';
import { PopUpMessage } from '../../helpers/modal';
import { IMusic } from '../../types/music/music';
import { gql } from '@apollo/client';

const GET_SEARCH = gql`
  query($search: String) {
    getMusicSearch(search: $search) {
      id
      image
      name
      album
      duration
    }
  }
`;

interface ISearch {
  getMusicSearch: IMusic[];
}

interface ISearchProps {
  search: string;
}

export const useSearch = () => {
  const [handle, setHandle] = useState(true);
  const [search, setSearch] = useState('');
  const [items, setItems] = useState<IMusic[]>([]);
  const [getSearch] = useLazyQuery<ISearch, ISearchProps>(GET_SEARCH);
  
  async function onSearch (e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      setHandle(true);
      document.documentElement.style.cursor = 'wait';
      const result = await getSearch({
        variables: { search }
      });
  
      if (result.data) {
        setItems(result.data.getMusicSearch);
        setSearch('');
        document.documentElement.style.cursor = 'auto';
      }
      if (result.error) {
        setSearch('');
        document.documentElement.style.cursor = 'auto';
        PopUpMessage(result.error.message, 1500);
      }
    }
  }

  function cleanState () {
    setItems([]);
    setHandle(false);
  }

  function onChange (e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  return { onSearch, cleanState, onChange, search, items, handle };
};