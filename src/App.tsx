 
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
import Onboarding from './pages/Onboarding';
import AuthLayout from "./components/AuthLayout"
import EditPost from './pages/EditPost';
import Post from './pages/Post';
 
 
 
function App() {
    

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg-px[9vw]'> 
    
    <div  >
       
      <ToastContainer/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<AboutUs/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/login' element={<AuthLayout authentication ={false}> <Login/></AuthLayout>}></Route>
          <Route path='/signup' element={<AuthLayout authentication ={false}> <Signup/></AuthLayout>}></Route>
          <Route path='/add-post' element={<AuthLayout authentication> <AddPost/></AuthLayout>}></Route>
          <Route path='/edit-post/:slug' element={<AuthLayout authentication> <EditPost/></AuthLayout>}></Route>
          <Route path='/post/:slug' element={<AuthLayout authentication> <Post/></AuthLayout>}></Route>
          <Route path='/all-posts' element={<AuthLayout authentication> <Allposts/></AuthLayout>}></Route>
          <Route path='/reset-password' element={<ResetPassword/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/onboarding' element={<Onboarding/>}></Route>
           
        </Routes>
         
    </div>
    
    </div>
  )
}

export default App
