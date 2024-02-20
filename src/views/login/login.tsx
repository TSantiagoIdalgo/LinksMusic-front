import Style from './login.module.css';
import Template from '../../components/user/template';
import LoginData from '../../components/user/login/loginData';
import Logo from '../../components/logo/logo';

export default function Login () {
  return (
    <main className={Style.login}>
      <nav className={Style.login_nav}>
        <Logo/>
      </nav>
      <Template>
        <LoginData/>
      </Template>
    </main>
  );
}