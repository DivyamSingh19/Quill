import React from 'react';
import  { useState, useEffect } from 'react';
 
 
import Container from '../components/Container';
 
import appwriteService from '../appwrite/config'  
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PostList from '../components/PostCard';
function AllPosts() {
    const [posts, setPosts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const breakpointColumnsObj = {
        default: 4,
        1280: 4,
        1024: 3,
        768: 2,
        640: 1
    };

    return (
        <div className='w-full py-8'>
          <Navbar/>
            <Container>
               

                
                    {filteredPosts.map((post) => (
                        <div key={post.$id} className="mb-4">
                            <PostList {...post} />
                        </div>
                    ))}
                 
            </Container>
            <Footer/>
        </div>
    );
}
export default AllPosts;