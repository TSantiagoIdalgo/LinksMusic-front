import { Routes, Route, Navigate } from 'react-router-dom';
import Main from './views/main/main';
import Login from './views/login/login';
import Register from './views/register/register';
import Verify from './views/verify/verify';
import PageError from './views/pageError/pageError';

function App() {
  const token = window.localStorage.getItem('USER_INFO')||window.sessionStorage.getItem('USER_INFO');
  
  return (
    <div>
      <Routes>
        <Route path='*' element={<PageError/>}/>
        <Route path='/' element={<Navigate to="/linksmusic/home" />}/>
        <Route path="/linksmusic" element={<Navigate to="/linksmusic/home"/>}/>
        <Route path="/linksmusic/:id" element={<Main/>}/>
        {!token && <Route path="/linksmusic/verify" element={<Verify/>}/>}
        {!token && <Route path="/linksmusic/login" element={<Login/>}/>}
        {!token && <Route path="/linksmusic/register" element={<Register/>}/>}
      </Routes>
    </div>
  );
}

export default App;
