import Style from './register.module.css';
import Input from '../../../input/input';
import PrimaryButton from '../../../buttons/primaryButton/primaryButton';
import { useRegister } from '../../../../utils/hooks/network/register/useRegister';
import { useNavigate } from 'react-router-dom';

export default function RegisterForm() {
  const { register, handleSubmit, errors, onSubmit } = useRegister();
  const navigate = useNavigate();
  return (
    <form autoComplete='off' className={Style.registerData} onSubmit={handleSubmit(onSubmit)}>
      <Input info={register('userName')} type={'text'} name='User name' error={errors.userName?.message}/>
      <Input info={register('email')} type={'email'} name={'Email adress'} error={errors.email?.message}/>
      <div className={Style.passwords}>
        <Input info={register('password')} type={'password'} name={'Password'} error={errors.password?.message} style={{ width: '200px'}}/>
        <Input info={register('repeatPassword')} type={'password'} name={'Repeat password'} error={errors.repeatPassword?.message} style={{ width: '200px'}}/>
      </div>
      <div className={Style.passwords}>
        <PrimaryButton type='button' onClick={() => navigate('/linksmusic/login')} text={'Go back'}/>
        <PrimaryButton type='submit' text={'Register'}/>
      </div>
    </form>
  ); 

}