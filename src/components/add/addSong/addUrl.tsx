import Style from './addUrl.module.css';
import { useUrl } from '../../../utils/hooks/music/useUrl';

export default function AddUrl() {
  const { register, handleSubmit, onSubmit, errors, clean } = useUrl();
  return (
    <form className={Style.addUrl} onSubmit={handleSubmit(onSubmit)}>
      <div className={Style.addUrl_input}>
        <input type="text" placeholder='Upload with youtube url' {...register('url')} />
        <button className={Style.addUrl_submit}>Upload</button>
        <button className={Style.addUrl_clean} type='button' onClick={clean}>X</button>
        <span className={Style.addUrl_error}>{errors.url?.message}</span>
      </div>
    </form>
  );

}