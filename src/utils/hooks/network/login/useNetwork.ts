import { auth } from '../../../../main';
import { GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import { useLazyQuery } from '@apollo/client';
import { NETWORK_LOGIN } from '../../../services/graphql/query/user/userLogin';
import { IUserNetworkLogin, IUserNetworkLoginVariables } from '../../../types/user/user';

export const useNetworkLogin = () => {
  const [networkLogin] = useLazyQuery<IUserNetworkLogin, IUserNetworkLoginVariables>(NETWORK_LOGIN);
  const provider = new GoogleAuthProvider();
  const providerFacebook = new FacebookAuthProvider();

  const signInWithGoogle = async () => {
    try {
      const credentials = await signInWithPopup(auth, provider);
      const { email, displayName, photoURL } = credentials.user;
      if (!email || !displayName) throw new Error('NETWORK ERROR');
      const result = await networkLogin({ 
        variables: { 
          userName: displayName, 
          email, 
          image: photoURL 
        } });
      if (result.data?.userNetworkLogin) {
        window.localStorage.setItem('USER_INFO', result.data.userNetworkLogin);
        window.location.href = '/linksmusic/home';
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };
    
  const signInWithFacebook = async () => {
    try {
      const credentials = await signInWithPopup(auth, providerFacebook);
      const { email, displayName, photoURL } = credentials.user;
      if (!email || !displayName) throw new Error('NETWORK ERROR');
      const result = await networkLogin({ 
        variables: { 
          userName: displayName, 
          email, 
          image: photoURL 
        } });
      if (result.data?.userNetworkLogin) {
        window.localStorage.setItem('USER_INFO', result.data.userNetworkLogin);
        window.location.href = '/linksmusic/home';
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return { signInWithGoogle, signInWithFacebook };
};