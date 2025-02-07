import React, { useState } from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'
import parse from "html-react-parser";

const PostCard = ({title, slug, featuredImage}) => {
  return (
    <div className='sm:grid grid-cols-1 md:grid grid-cols-4'> 
    <div className='bg-gray-800 p-4 rounded-2xl border border-gray-700 hover:scale-95 transition-all duration-200 ease-linear shadow-xl shadow-slate-900 hover:shadow-xl'>
      <Link to={`/post/${slug}`}>
        <div className='relative w-full pt-[56.25%]   overflow-hidden rounded-lg group'>
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className='absolute inset-0 w-full h-full object-cover'
            loading='lazy'
          />
        </div>
        <h3 className='mt-3 font-medium text-xl truncate transition-colors duration-300 group-hover:text-indigo-400'>
          {title}
        </h3>
        
        <div className='flex items-center justify-between gap-2 mt-4'>
          
          <div className='mx-2'>
            <p className='text-indigo-500 hover:text-indigo-400'>Read more</p>
          </div>
        </div>
      </Link>
    </div>
    </div>

  )
}

export default PostCard