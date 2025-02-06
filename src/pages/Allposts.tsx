import { useEffect , useState } from "react"
import appwriteService from "../appwrite/config"
import Navbar from "../components/Navbar";
function Allposts()  {
  const [posts,setPosts] = useState([]);
  const [searchQuery , setSearchQuery] = useState('');
  useEffect(()=>{
     appwriteService.getPosts([]).then((posts)=>{
      if(posts){
        setPosts(posts.documents);
      }
     })
  },[])


  const filteredPosts = posts.filter((posts)=>
   posts.title.toLowerCase().includes(searchQuery.toLowerCase())
  
  );
  const breakpointColumnsObj ={
    default :4 ,
    1280:4,
    1024:3,
    768:2,
    640:1
  };
  return (
    <div>
      <Navbar/>
    </div>
  )
}

export default Allposts
