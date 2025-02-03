import React, { useEffect, useState } from 'react'
import SplashScreen from '../components/SplashScreen'
import Header from '../components/Header'

const Home = () => {
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false);
    }, 3000)
    return () => clearTimeout(timer);
  },[])
  return (
    <div className=''>
      {
        loading ? (
          <SplashScreen onAnimationEnd={function () : void{throw new Error('Function not implemented.')}}/>
        ):(
          <div>
          <Header/>
          
          </div>
        )
      }
    </div>
  )
}

export default Home
