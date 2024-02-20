import { useEffect } from 'react';
import Style from './register.module.css';
import Logo from '../../components/logo/logo';
import Template from '../../components/user/template';
import RegisterData from '../../components/user/register/registerData';

export default function Register() {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  return (
    <div className={Style.register}>
      <nav className={Style.register_nav}>
        <Logo/>
      </nav>
      <Template>
        <RegisterData/>
      </Template>
    </div>
  ); 
}