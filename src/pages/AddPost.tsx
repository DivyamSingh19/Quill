import React from 'react'
import Container from '../components/Container'
import { Card } from '../components/Card'
import PostForm from '../components/Post-form'

const AddPost = () => {
  return (
    <div className='py-8'>
      <Container >
            <PostForm/>
      </Container>
       
    </div>
  )
}

export default AddPost
