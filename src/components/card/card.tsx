import Style from './card.module.css';
import { ICard } from '../../views/card/card';
import { NavLink } from 'react-router-dom';

export default function Card ({ id, image, name, author }: ICard) {
  return (
    <NavLink to={`/linksmusic/album?album=${id}`} className={Style.card}>
      <div className={Style.card_image}>
        <img src={image} alt={author}/>
      </div>
      <div className={Style.card_data}>
        <h2>{name}</h2>
        <h2>{author}</h2>
      </div>
    </NavLink>
  );
}