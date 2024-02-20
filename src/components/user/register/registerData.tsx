import { useLocation } from 'react-router-dom';
import Style from './registerData.module.css';
import RegisterForm from './registerForm/registerData';
import Registered from './registered/registered';

export default function RegisterData() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const registered = params.get('registered');
  return (
    <section className={Style.registerData}>
      {registered === 'true'
        ? <Registered/>
        : <section className={Style.register_template}>
          <h1>Register in Links Music</h1>
          <RegisterForm/>
        </section>}
    </section>
  );
}