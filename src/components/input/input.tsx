import Style from './input.module.css';
import { InputProps } from '../../utils/types/input/input';

export default function Input(props: InputProps) {
  const { info, name, type, error, style } = props;

  return (
    <div className={Style.group}>
      <input
        {...info}
        id={name}
        className={Style.input}
        placeholder=" "
        type={type}
        style={style}
      />
      <label htmlFor={name} className={Style.label}>
        {name}
      </label>
      {error && typeof error === 'string' ? <span className={Style.error}>{error}</span> : null}
    </div>
  );
}