import { ApolloProvider } from '@apollo/client';
import { client } from './utils/helpers/apolloConfig.ts';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { Provider } from 'react-redux';
import { store } from './utils/state/store.ts';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: 'globant-music.firebaseapp.com',
  projectId: 'globant-music',
  storageBucket: 'globant-music.appspot.com',
  messagingSenderId: '654052421207',
  appId: '1:654052421207:web:60dda2fd4d4eb93c103d12',
  measurementId: 'G-T7TZX2897K'
};
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
);