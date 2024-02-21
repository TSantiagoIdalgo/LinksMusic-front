import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, signInSchema } from '../../../validates/user';
import { LOGIN_USER } from '../../../services/graphql/query/user/userLogin';
import { IUserLogin, IUserLoginVariables } from '../../../types/user/user';
import { useLazyQuery } from '@apollo/client';
import { useState } from 'react';

export const useLogin = () => {
  const [userLogin] = useLazyQuery<IUserLogin, IUserLoginVariables>(LOGIN_USER);
  const [remind, SetRemind] = useState(false);

  const { register, handleSubmit, formState: { errors }, setError } = useForm<signInSchema>({
    resolver: zodResolver(loginSchema)
  });
  
  const onSubmit = async (data: signInSchema) => {
    const { email, password } = data;
    try {
      const result = await userLogin({
        variables: {
          email: email,
          passwordHash: password,
        }
      });
      
      if (result.error?.message) throw new Error(result.error.message);
      if (result.data && result.data.userLogin.token) {
        if (remind) window.localStorage.setItem('USER_INFO', result.data.userLogin.token);
        else window.sessionStorage.setItem('USER_INFO', result.data.userLogin.token);
        window.location.href = '/linksmusic';
      }
    } catch (error: any) {
      setError('password', { message: error.message });
    }
  };

  return { register, handleSubmit, errors, onSubmit, remind, SetRemind };
};