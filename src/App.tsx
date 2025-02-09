 
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
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
 
 
function App() {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg-px[9vw]'> 
      <ToastContainer/>
      <Routes>
         
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/contact' element={<Contact/>} />
        
        {/* Auth routes - redirect if already logged in */}
        <Route path='/login' element={
          <AuthLayout authentication={false}><Login/></AuthLayout>
        } />
        <Route path='/signup' element={
          <AuthLayout authentication={false}><Signup/></AuthLayout>
        } />
        <Route path='/reset-password' element={
          <AuthLayout authentication={false}><ResetPassword/></AuthLayout>
        } />

         
        <Route path='/add-post' element={
          <AuthLayout authentication>{<AddPost/>}</AuthLayout>
        } />
        <Route path='/edit-post/:slug' element={
          <AuthLayout authentication>{<EditPost/>}</AuthLayout>
        } />
        <Route path='/post/:slug' element={
          <AuthLayout authentication>{<Post/>}</AuthLayout>
        } />
        <Route path='/all-posts' element={
          <AuthLayout authentication>{<Allposts/>}</AuthLayout>
        } />
        <Route path='/profile' element={
          <AuthLayout authentication>{<Profile/>}</AuthLayout>
        } />
        <Route path='/onboarding' element={
          <AuthLayout authentication>{<Onboarding/>}</AuthLayout>
        } />

         
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

 
function NotFound() {
  useEffect(()=>{
    document.body.style.overflow="hidden"
    return () => (
      document.body.style.overflow ="auto"
    )
  },[])
  return (
    <div className="w-screen  aboslute top-0 left-0 h-screen  flex items-center justify-center">
      <div className="text-center ">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="mb-4">The page you're looking for doesn't exist.</p>
        <Link to="/" className="text-blue-500 hover:text-blue-600">
          <button className='hover:cursor-pointer bg-white text-black border border-2xl px-2 py-2'>Go back home</button> 
        </Link>
      </div>
    </div>
  );
}

export default App