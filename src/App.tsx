 
import './App.css'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import AddPost from './pages/AddPost'
import Allposts from './pages/Allposts'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ResetPassword from './pages/ResetPassword';
import  Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { UseSelector } from 'react-redux';
 
 
function App() {
   const authStatus = useSelector(s)  

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg-px[9vw]'> 
    
    <div  >
       
      <ToastContainer/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<AboutUs/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/add-post' element={<AddPost/>}></Route>
          <Route path='/all-posts' element={<Allposts/>}></Route>
          <Route path='/reset-password' element={<ResetPassword/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
        </Routes>
         
    </div>
    
    </div>
  )
}

export default App
