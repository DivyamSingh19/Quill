 
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import {  useState } from 'react'
import ExpandingSearch from './ExpandingSearch';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from './Button';

const Navbar = () => {
    const [visible,setVisible] = useState(false);
    const authStatus = useSelector((state)=> state.auth.status)
    const navigate = useNavigate();
    const navItems = [
       { name:'Home',
        slug:'/',
        active:true
       },
       { name:'Login',
        slug:'/login',
        active:true
       },
       { name:'Signup',
        slug:'/signup',
        active:!authStatus
       },
       { name:'Your Pen',
        slug:'/add-post',
        active:authStatus
       },
       { name:'Blogs',
        slug:'/all-posts',
        active:authStatus
       },
       { name:'About us',
        slug:'/about',
        active:true
       },
       { name:'Contact',
        slug:'/contact',
        active:true
       },

    ]
    
  return (
    <div className=' flex items-center justify-between py-5 font-medium w-full pt-5 absolute top-0 left-0'>
     <Link to={'/'}><img src={assets.logo} className='w-36' alt = "" /></Link> 
        <ul className='hidden sm:flex gap-5 text-sa txt-gray-700 border pt-5 px-5 py-5 pb-5 rounded-2xl '>
            {/* <NavLink to='/' className= 'flex flex-col items-center gap-1'>
                <p>Home</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr> 
            </NavLink>
            <NavLink to='/add-post' className= 'flex flex-col items-center gap-1'>
                <p>Your Pen</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr> 
            </NavLink>
            <NavLink to='/about' className= 'flex flex-col items-center gap-1'>
                <p>About Us</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr> 
            </NavLink>
            <NavLink to='/all-posts' className= 'flex flex-col items-center gap-1'>
                <p>Posts</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr> 
            </NavLink>
            <NavLink to='/contact' className= 'flex flex-col items-center gap-1'>
                <p>Contact</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr> 
            </NavLink> */}
            {
                navItems.map((item)=>item.active?(
                    <li key={item.name}>
                        <button
                          onClick={()=>navigate(item.slug)}
                          className='inline-block px-6 py-2 duration-200 hover: rounded-full cursor-pointer'>{item.name}</button>
                    </li>
                ):null)}
                {
                    authStatus && (
                        <li>
                         <Button/>
                        </li>
                    )
                }
            
 
        </ul>
        <div className='flex items-center gap-6'>
            <ExpandingSearch/>
            <div className='group relative'>
                <img className='w-5 cursor-pointer'src ={assets.profile_icon} alt=""/>
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-9 px-9 bg-slate-100 text-gray-500 rounded'>
                    <p className='cursor-pointer hover:text-black'>Your Profile</p>
                    <p className='cursor-pointer hover:text-black'>Orders</p>
                    <p className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                
                </div>

            </div>
            
            <img onClick={()=>setVisible(true)} src = {assets.menu} className='w-5 cursor-pointer md:hidden' alt=''/>
        </div>
        {/* {sidebar menu for small screen} */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-gray-900 transition-all ${visible?'w-full':"w-0"}`}> 
           <div className='flex flex-col text-white'>
            <div onClick ={()=>setVisible(false)}className='flex items-center gap-4 p-3 cursor-pointer'>
                <img  className='h-4 roatate-180' src={assets.dropdown} alt=""/>
                <p>Back</p>
            </div>
            <NavLink onClick={()=>setVisible(false)} className='py-8 pl-6 border' to ='/'>Home</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-8 pl-6 border ' to ='/collection'>Collection</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-8 pl-6 border 'to ='/about'>About</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-8 pl-6 border 'to ='/contact'>Contact</NavLink>
            {/* {issue with plain navlink is we have to click back when we move to a particular page solution is } */}

           </div>
        </div>
    </div>
  )
}

export default Navbar
