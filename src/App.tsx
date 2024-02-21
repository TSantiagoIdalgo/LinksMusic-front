import { Routes, Route, Navigate } from 'react-router-dom';
import Main from './views/main/main';
import Login from './views/login/login';
import Register from './views/register/register';
import Verify from './views/verify/verify';

function App() {
  const token = window.localStorage.getItem('USER_INFO')||window.sessionStorage.getItem('USER_INFO');
  
  return (
    <div>
      <Routes>
        <Route path='*' element={<Navigate to='/home'/>}/>
        <Route path="/:id" element={<Main/>}/>
        {!token && <Route path="/verify" element={<Verify/>}/>}
        {!token && <Route path="/login" element={<Login/>}/>}
        {!token && <Route path="/register" element={<Register/>}/>}
      </Routes>
    </div>
  );
}

export default App;
