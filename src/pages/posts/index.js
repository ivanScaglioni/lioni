import Link from "next/link";
import Notfound from "components/notfound";
import Image from "next/image";
const axios = require('axios');
import { useEffect ,useState } from "react";



export default  function Posts() {
  
  
  const [posts, setPosts] = useState({});

    
    async function data(){
        const res = await axios.get('/api/post');
        setPosts(res.data)

    }
    
 

    useEffect(() => {
        data();
        
      }, []); 


  
  return (
    <section className="container-h">
      <h1 className="space title">Blog</h1>
      <div className="posts-container">
        {posts.length > 0 
          ? posts.map(post =>(
            <div className="card" key={post._id}>
    
              <div className="post-title">
                {post.title}
              </div>
              <div>
                <img className="card-img" src={`${post.image}`} /> 
              </div>
              <div className="post-description">

                {post.description}
 
              </div>

              <Link href={`/posts/${post._id}`}>
                <a href="" className="card-a">read</a>
              </Link>
              </div>

          ))
          : <Notfound type="Projects" />
        }
      </div>
      
    </section>
  )
}
  