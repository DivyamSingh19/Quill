import React, { useEffect, useState } from 'react'
import SplashScreen from '../components/SplashScreen'
import Header from '../components/Header'
import ExpandingSearch from '../components/ExpandingSearch'

const Home = () => {
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false);
    }, 3000)
    return () => clearTimeout(timer);
  },[])
  return (
    <div className='w-screen min-h-screen absolute top-0 left-0 bg-[radial-gradient(500px_circle_at_bottom,_var(--tw-gradient-stops))] from-gradient via-mid to-background'>
      {
        loading ? (
          <SplashScreen onAnimationEnd={function () : void{throw new Error('Function not implemented.')}}/>
        ):(
          <div>
          
          <ExpandingSearch/>
          </div>
        )
      }
    </div>
  )
}

export default Home
