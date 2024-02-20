import Style from './playlistDelete.module.css';
import { useDeletePlaylist } from '../../../utils/hooks/playlist/useDeletePlaylist';

interface Delete {
    handleDelete: React.Dispatch<React.SetStateAction<boolean>>;
    id: string;
}

export default function PlaylistDelete({ handleDelete, id }: Delete) {
  const { onDelete } = useDeletePlaylist(id);
  return (
    <figure className={Style.portal}>
      <div className={Style.container}>
        <p>Are you sure you want to delete this playlist?</p>
        <div className={Style.container_buttons}>
          <button onClick={() => handleDelete(false)}>Cancel</button>
          <button onClick={onDelete}>Delete Playlist</button>
        </div>
      </div>
    </figure>
  );
}