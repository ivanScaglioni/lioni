import Link from "next/link";
import Notfound from "components/notfound";
const axios = require('axios');
import { useEffect ,useState } from "react";



export default  function Posts() {
  
  
  const [posts, setPosts] = useState({});

    
    async function data(){
        const res = await axios.get('/api/post');
        if(res.status == 200){
          setPosts(res.data);
        }else{
          const ok = document.getElementById('response-ok').style.display = "none";
          const err = document.getElementById('response-error').style.display = "flex";
        }
        
     

    }
    
 

    useEffect(() => {
        data();
        
      }, []); 


  
  return (
    <section className="container-v">
      <h1 className="space title">Blog</h1>
      <div id="response-ok" className="posts-container">
        {posts.length > 0 
          ? posts.map(post =>(
            <div className="card card-home" key={post._id}>
              
              <div className="card-header">
                <Link href={`/posts/${post._id}`}>
                  
                    <a href="" className="a-push"> <h2 className="push">{post.title}</h2> </a>
                  
            
                </Link>
              </div>


              <div className="card-date">{new Date(post.createdAt).toLocaleDateString()}</div>
              
              <div>
                <img className="card-img" src={`${post.image}`} /> 
              </div>

              <div className="card-description">
                {post.description}

 
              </div>
              <div className="card-links">
                {post.github != undefined &&
                  
                  <a className="card-link"href={post.github}>{'-'} Github</a>
              
                }
                {post.website != undefined &&
                  
                  <a className="card-link" href={post.website}>{'-'} Website </a>
                  
                }
              </div>

            </div>

          ))
          : <Notfound type="Post" status="loading" />
        }
      </div>

      <div id="response-error">
        <Notfound type="Prost" status="error" />
      </div>
      
    </section>
  )
}
  