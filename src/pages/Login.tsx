import React from 'react'
import { useEffect } from 'react'
const Login = () => {

  useEffect(()=>{
      document.body.style.overflow = "hidden";
      return ()=>{ 
       document.body.style.overflow = "auto";
      }
  },[])
  return (
    <div>
      
    </div>
  )
}

export default Login
