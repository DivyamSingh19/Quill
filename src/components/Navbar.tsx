 
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import {  useState } from 'react'
import ExpandingSearch from './ExpandingSearch';


const Navbar = () => {
    const [visible,setVisible] = useState(false);
    
    
  return (
    <div className='flex items-center justify-between py-5 font-medium w-full pt-5 absolute top-0 left-0'>
     <Link to={'/'}><img src={assets.logo} className='w-36' alt = "" /></Link> 
        <ul className='hidden sm:flex gap-5 text-sa txt-gray-700 border pt-5 px-5 py-5 pb-5 rounded-2xl '>
            <NavLink to='/' className= 'flex flex-col items-center gap-1'>
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
            </NavLink>
 
        </ul>
        <div className='flex items-center gap-6'>
            <ExpandingSearch/>
            <div className='group relative'>
                <img className='w-5 cursor-pointer'src ={assets.profile_icon} alt=""/>
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                    <p className='cursor-pointer hover:text-black'>My Profile</p>
                    <p className='cursor-pointer hover:text-black'>Orders</p>
                    <p className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                
                </div>

            </div>
            
            <img onClick={()=>setVisible(true)} src = {assets.menu} className='w-5 cursor-pointer sm:hidden' alt=''/>
        </div>
        {/* {sidebar menu for small screen} */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible?'w-full':"w-0"}`}> 
           <div className='flex flex-col text-gray-600'>
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
