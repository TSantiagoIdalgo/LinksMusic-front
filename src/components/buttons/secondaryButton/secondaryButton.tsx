import Style from './secondaryButton.module.css';
import { IButton } from '../../../utils/types/buttons/button';

const SecondaryButton = (props: IButton) => {
  const { text, type, onClick, style } = props;
  return (
    <button className={Style.button} type={type} onClick={onClick} style={style}>
      { text }
    </button>
  );
};

export default SecondaryButton;