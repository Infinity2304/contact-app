import './App.css'
import {Navigate, Route, Routes} from 'react-router-dom';
import Login from './components/pages/Login/Login'
import Home from './components/pages/Home/Home';
import {Toaster} from "react-hot-toast"; 
import { useAuthContext } from './context/AuthContext';

function App() {

  const {authUser} = useAuthContext();
  return <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path="/" element={authUser ? <Home/> : <Navigate to="login"/> }/>
        <Route path="/login" element={authUser ? <Navigate to="/"/> : <Login/>}/>
      </Routes>
      <Toaster/>
  </div>
}

export default App
