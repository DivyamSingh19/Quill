import React, { useState } from 'react'
import logo from '../assets/assets'
import { Link , NavLink } from 'react-router-dom'

const Header = () => {
  const [visible,setVisible] = useState(false);
  
  return (
    <div className='flex items-center justify-between py-5 font-medium absolute top-0 left-0 w-full pt-10 mx-auto bg-white'>
      <div className='bg-pink pt-2'>
        
      </div>
    </div>
  )
}

export default Header
