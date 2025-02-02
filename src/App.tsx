 
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
import Header from './components/Header';
function App() {
   

  return (
    <div>
      <Header/>
      <ToastContainer/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<AboutUs/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/add-post' element={<AddPost/>}></Route>
          <Route path='/all-posts' element={<Allposts/>}></Route>
        </Routes>
    </div>
  )
}

export default App
