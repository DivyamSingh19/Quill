import React from 'react'
import Container from '../components/Container'
import { Card } from '../components/Card'
import PostForm from '../components/PostForm/PostForm'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { CardGradient } from '../components/CardGradient'
import { toast } from 'react-toastify'

const AddPost = () => {
  
  const handleBackClick = () => {
    alert("This will discard the changes made to the blog")
    window.history.back(); 

  };
  return (
    <div className=''>
       
      <div className='w-4/18 md:w-1/15'>
        <CardGradient > 
      <button
          onClick={handleBackClick}
          className="bg-gray-200 text-black px-3 py-1.5 rounded-2xl text-sm font-medium 
                   hover:bg-gray-300 cursor-pointer transition-colors duration-200 flex items-center gap-2"
        >
          ← Back
        </button>
        </CardGradient>
        </div>
       
            <PostForm />
       <hr />
      <Footer/>
       
    </div>
  )
}

export default AddPost
