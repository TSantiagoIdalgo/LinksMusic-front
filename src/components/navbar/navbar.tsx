import { useState } from 'react';
import Style from './navbar.module.css';
import Logo from '../logo/logo';
import SearchBar from '../searchbar/searchBar';
import ExtendedNav from './extendedNav/extendedNav';
import UserModal from './userModal/userModal';

export default function NavBar () {
  const [extend, handleExtend] = useState(false);
  return (
    <nav className="nav">
      <div className={Style.logo}>
        <button type='button' onClick={() => handleExtend(!extend)} className={Style.button}>≡</button>
        <Logo/>
        {extend && <ExtendedNav handleExtend={handleExtend}/>}
      </div>
      <SearchBar/>
      <UserModal/>
    </nav>
  );

}