import React, { useEffect, useState } from 'react'
import SplashScreen from '../components/SplashScreen'
import NewsletterBox from '../components/NewsLetter'
import Footer from '../components/Footer'
import Header from '../components/Header'
import {Landing as LandingComponent} from '../components/Landing'
import GridLayout from '../components/Grid'
 

const Home = () => {
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    document.body.style.overflowX="hidden"
    return()=>(
      document.body.style.overflowX="auto" 
    )
  })
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false);
    }, 3000)
    return () => clearTimeout(timer);
  },[])
  return (
    <div className='absolute top-0 left-0 w-screen h-screen flex items-center justify-center '>
      {
        loading ? (
          <SplashScreen onAnimationEnd={function () : void{throw new Error('Function not implemented.')}}/>
        ):(
          <div>
           
          <LandingComponent pathLengths={[]}/>
           
          
          </div>
        )
      }
    </div>
  )
}

export default Home
