import Style from './album.module.css';
import Card from '../../card/card';

import { GET_BY_AUTHOR } from '../../../utils/services/graphql/query/music/getByAlbum';
import { useQuery } from '@apollo/client';
import { ICardProps } from '../../../views/card/card';

export default function Album() {
  const { data, loading, error } = useQuery<ICardProps>(GET_BY_AUTHOR);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <section className={Style.album_container}>
      <h2>Album</h2>
      <div className={Style.card_container}>
        {data?.getMusicByAuthor.map(({ id, image, name, author }) => (
          <Card key={id} id={id} name={name} author={author} image={image} />
        ))}
      </div>
    </section>
  ); 
}