import Style from './loginData.module.css';
import LoginForm from './loginForm/loginForm';
import { useNetworkLogin } from '../../../utils/hooks/network/login/useNetwork';
import googleIcon from '../../../assets/icons/networks/google-logo-240.png';
import fbIcon from '../../../assets/icons/networks/facebook-circle-logo-240.png';

export default function LoginData() {
  const { signInWithGoogle, signInWithFacebook } = useNetworkLogin();
  return (
    <article className={Style.login}>
      <h1>Login in Links Music</h1>
      <button onClick={signInWithGoogle} className={Style.login_button}type="button">
        <img className={Style.login_google} src={googleIcon} alt="google" />
        Log in with Google
      </button>
      <button onClick={signInWithFacebook} className={Style.login_button} type='button'>
        <img className={Style.login_fb} src={fbIcon} alt="facebook" />
          Log in with Facebook
      </button>
      <div className={Style.login_middle}/>
      <LoginForm/>
    </article>
  );
}