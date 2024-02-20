import Style from './searchBar.module.css';
import searchIcon from '../../assets/icons/search.png';
import SongCard from '../songCard/songCard';
import { useSearch } from '../../utils/hooks/common/useSearch';

export default function SearchBar() {
  const { onSearch, cleanState, onChange, search, items, handle } = useSearch();

  return (
    <div className={Style.searchbar}>
      <img src={searchIcon} alt="search icon" className={Style.searchIcon}/>
      <input 
        type="text" 
        placeholder="Search for a song" 
        value={search} 
        onChange={onChange}
        onKeyDown={onSearch}/>
      <button onClick={cleanState} className={Style.cleanSearch}>X</button>
      {items.length > 0 && handle && 
      <div className={Style.searchContainer} onMouseLeave={cleanState}>
        {items.map((item) => (
          <SongCard music={item} key={item.id} style={{width: '90%'}}/>
        )).slice(0, 6)}
      </div>}
    </div>
  );
}