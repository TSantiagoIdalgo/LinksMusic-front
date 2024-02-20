import Style from './primaryButton.module.css';
import { IButton } from '../../../utils/types/buttons/button';

const PrimaryButton = (props: IButton) => {
  const { text, onClick, style, type } = props;
  return (
    <button className={Style.button} onClick={onClick} style={style} type={type}>
      {text}
    </button>
  );
};

export default PrimaryButton;