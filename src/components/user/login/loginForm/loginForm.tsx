import { useNavigate } from 'react-router-dom'; 
import { useLogin } from '../../../../utils/hooks/network/login/useLogin';
import Style from './loginForm.module.css';
import Input from '../../../input/input';
import RemindButton from '../remind/remindButton';
import PrimaryButton from '../../../buttons/primaryButton/primaryButton';


export default function LoginForm() {
  const navigate = useNavigate();
  const { register, handleSubmit, errors, onSubmit, remind, SetRemind } = useLogin();
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={Style.loginForm}>
      <Input 
        name='Email Adress' 
        type='email' 
        info={register('email')} 
        error={errors.email?.message}/>
      <Input 
        name='Password' 
        type='password' 
        info={register('password')} 
        error={errors.password?.message}/>
      <RemindButton remind={remind} setRemind={SetRemind}/>
      <div className={Style.login_form_buttons}>
        <PrimaryButton type='button' text='Register' onClick={() => navigate('/linksmusic/register?registered=false')}/>
        <PrimaryButton type='submit' text='Login'/>
      </div>
    </form>
  ); 
}
