import Style from './registered.module.css';
import PrimaryButton from '../../../buttons/primaryButton/primaryButton';
import { useNavigate } from 'react-router-dom';

export default function Registered() {
  const navigate = useNavigate();
  return (
    <section className={Style.template}>
      <div className={Style.register_template}>
        <h1>Successfully registered!</h1>
        <p>We have sent you an email to verify your user, it will arrive in a few minutes</p>
        <p>If it doesn`t appear, check your spam box.</p>
        <PrimaryButton onClick={() => navigate('/')} text='Go home' type='button' />
      </div>
    </section>
  );
}