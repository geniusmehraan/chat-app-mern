import './index.css';
import Login from './pages/Login/Login'
import SignUp from "./pages/signUp/SignUp"
import Home from './pages/Home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import {Toaster} from "react-hot-toast"
import { useAuthContext } from './context/AuthContext';
import usesignUp from './hooks/usesignUP'; 
import Guide from './pages/Home/Guide';
const App = () => {
  const {authUser} = useAuthContext();
  

  return (
    <div className='flex h-screen  items-center justify-center '>
      <Routes>
        <Route path='/' element={authUser?<Home></Home>:<Navigate to="/guide" />}/>

        <Route path='/guide' element={<Guide/>}/>
     
        <Route path='/login' element={authUser?<Navigate to="/"/>:<Login/>}/>
        <Route path='/signup' element={authUser?<Navigate to="/"/>:<SignUp></SignUp>}/>
      </Routes>
      <Toaster></Toaster>
    </div>
  )
}

export default App

      
