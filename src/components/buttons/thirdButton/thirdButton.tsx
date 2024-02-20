import Style from './thirdButton.module.css';
import { useLocation, NavLink } from 'react-router-dom';
import { ILink } from '../../../utils/types/buttons/button';

export default function ThirdButton(props: ILink) {
  const { text, type, navigate, style, img } = props;
  const location = useLocation().pathname;

  return <NavLink to={navigate} className={Style.button_container}>
    { img && <img src={img} alt="" className={Style.img} /> }
    <button 
      className={`${location.includes(navigate)
        ? Style.button_active
        : Style.button}`} 
      type={type}
      style={style}>{text}</button>
  </NavLink>;
}