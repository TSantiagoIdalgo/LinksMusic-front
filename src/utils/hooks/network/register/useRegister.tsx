import { registerSchema, TRegisterSchema } from '../../../validates/user';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { CREATE_USER } from '../../../services/graphql/mutation/user/createUser';
import { IUserRegister, IUserRegisterVariables } from '../../../types/user/user';
import { useMutation } from '@apollo/client';

export const useRegister = () => {
  const navigate = useNavigate();
  const [ createUser ] = useMutation<IUserRegister, IUserRegisterVariables>(CREATE_USER);

  const { register, handleSubmit, formState: { errors }, setError } = useForm<TRegisterSchema>({
    resolver: zodResolver(registerSchema)
  });

  async function onSubmit(data: TRegisterSchema) {
    try {
      const result = await createUser({ 
        variables: { 
          userName: data.userName, 
          email: data.email, 
          passwordHash: data.password } 
      });
      if (result.data?.createUser) navigate('/linksmusic/register?registered=true');
    } catch (error: any) {
      setError('email', { message: error.message });
    }
  }

  return { register, handleSubmit, errors, onSubmit };
};