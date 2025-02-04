import React, { useEffect, useState } from 'react'
import SplashScreen from '../components/SplashScreen'
import NewsletterBox from '../components/NewsLetter'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Landing from '../components/Landing'
 

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
          <Header/>
          <Landing/>
          <NewsletterBox/>
          
          <Footer/>
          </div>
        )
      }
    </div>
  )
}

export default Home
