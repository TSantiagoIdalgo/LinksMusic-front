import Style from './creaetePlaylist.module.css';
import { useCreatePlaylist } from '../../utils/hooks/playlist/useCreatePlaylist';

export default function CreatePlaylist() {
  const { register, handleSubmit, onSubmit, loading, errors } = useCreatePlaylist();
  return (
    <form className={Style.playlist} onSubmit={handleSubmit(onSubmit)}>
      <div className={Style.playlist_form}>
        <div className={Style.playlist_form_items}>
          <h1>New playlist</h1>
          <input type="text" placeholder='Tittle' {...register('tittle')} />
          <span>{errors?.tittle?.message}</span>
          <input type="text" placeholder='Description' {...register('description')} />
          <span>{errors?.description?.message}</span>
        </div>
        <div className={Style.playlist_buttons}>
          <button type='button'>Cancel</button>
          <button disabled={loading}>Create playlist</button>
        </div>
      </div>
    </form>
  );
}