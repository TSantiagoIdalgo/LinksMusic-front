import { useQuery } from '@apollo/client';
import { GET_USER_BY_ID, GetUserById } from '../../../utils/services/graphql/query/user/getById';
import Style from './userModal.module.css';
import userIcon from '../../../assets/icons/user-icon.png';
import { useState } from 'react';

export default function UserModal() {
  const token = window.localStorage.getItem('USER_INFO')||window.sessionStorage.getItem('USER_INFO');
  const { data } = useQuery<GetUserById>(GET_USER_BY_ID);
  const [modal, handleModal] = useState(false);
  function handleLogout() {
    window.localStorage.removeItem('USER_INFO');
    window.location.href = '/linksmusic/home';
  }
  
  return (
    <div className={Style.user_modal}>
      <img 
        src={data?.getUserById.image ? data.getUserById.image : userIcon} 
        alt="user icon" 
        className={data?.getUserById.image ? Style.userImg : Style.userIcon}
        onClick={token != null ? () => handleModal(!modal) : () => window.location.href = '/linksmusic/login'}/>
      {modal &&
        <div className={Style.modal_container}>
          <img 
            src={data?.getUserById.image ? data.getUserById.image : userIcon} 
            alt="user" 
            className={data?.getUserById.image ? Style.user_picture_active : Style.user_picture} />
          <div className={Style.modal_text}>
            <h2>{data?.getUserById.userName}</h2>
            <p>{data?.getUserById.email}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>}
    </div>
  );
}