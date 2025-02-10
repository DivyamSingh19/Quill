import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import {logout} from '../store/authSlice'
const Logoutbutton = () => {
    const dispatch = useDispatch()
    const logoutHandler=()=>{
        authService.logout().then(()=>{
            dispatch(logout());
        })
    }
  return (
    <button 
  
    onClick={logoutHandler}
    
    >
      <div className="flex items-center justify-center rounded-2xl cursor-pointer pt-2 px-2 py-2">
  <div className="relative rounded-2xl   bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
    <div className="w-full flex relative items-center justify-center bg-black back pt-2 px-2 py-2 rounded-lg">
      <h1 className="text-sm  font-medium text-white">Logout</h1>
    </div>
  </div>
</div>
      
    </button>
  )
}

export default Logoutbutton
 