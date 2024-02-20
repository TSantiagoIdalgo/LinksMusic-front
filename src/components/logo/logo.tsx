import Style from './logo.module.css';
import logo from '../../assets/icons/logo.png';
import { NavLink } from 'react-router-dom';

export default function Logo() {
  return (
    <NavLink to='/' className={Style.logo}>
      <img src={logo} alt="logo" />
      <h1>Links Music</h1>
    </NavLink>
  );
}