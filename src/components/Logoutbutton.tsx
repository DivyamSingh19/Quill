import React from 'react'
import { useDispatch, UseDispatch } from 'react-redux'
import authService from '../appwrite/auth'
const Logoutbutton = () => {
    const dispatch = useDispatch()
    const logoutHandler=()={
        authService.logout().then(()={
            dispatch(logout())
        })
    }
  return (
    <button 
    className='inline-block px-6 py-2 bg-gradient-to-t from-green-500 to-white rounded-full'
    onClick={logoutHandler}
    
    >
      
    </button>
  )
}

export default Logoutbutton
