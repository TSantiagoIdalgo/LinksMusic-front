import Style from './verify.module.css';
import Template from '../../components/user/template';
import Logo from '../../components/logo/logo';
import { Navigate } from 'react-router-dom';
import { useQueryURL } from '../../utils/hooks/common/useQueryURL';
import { useMutation, gql } from '@apollo/client';
import { useEffect, useState } from 'react';

const VERIFY_USER = gql`
  mutation($token: String!) {
    verifyUser(token: $token) {
      email
    }
  }
`;

export default function Verify () {
  const [errorRegister, setErrorRegister] = useState('Successfully registered!');
  const { queryURL } = useQueryURL('access_token');
  const [verifyUser] = useMutation(VERIFY_USER);

  if (queryURL.length === 0) return <Navigate to='/linksmusic/home'/>;

  useEffect(() => {
    const verify = async () => {
      try {
        await verifyUser({
          variables: {
            token: queryURL
          }
        });
      } catch (error: any) {
        setErrorRegister(`Error: ${error.message}`);
      }
    };
    verify();
  },[]);
  return (
    <main className={Style.verify}>
      <nav className={Style.verify_nav}>
        <Logo/>
      </nav>
      <Template>
        <div className={Style.text}>
          <h2>{errorRegister}</h2>
          <button onClick={() => window.location.href = '/linksmusic/home'}>Back to home</button>
        </div>
      </Template>
    </main>
  );
}