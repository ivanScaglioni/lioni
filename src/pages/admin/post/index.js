import Link from "next/link";
import Notfound from "components/notfound";
import Image from "next/image";
const axios = require('axios');
import { useEffect ,useState } from "react";


export default  function adminPosts(props) {

    const [posts, setPosts] = useState({});
    
    async function data(){
        const res = await axios.get('/api/post');
        setPosts(res.data)
    }
    
    const reqDelete = async (id)=>{
      const res = await axios({
        method: 'DELETE',
        url: `../api/post/${id}`,
        data: {
          authorization: 'chupla'

        }
      });
      console.log(res);
    }

    useEffect(() => {
        data();
      }, []); 

  return (
    <section className="container-v">

      <h1 className="space title">Blog</h1>
      <Link href={'post/newpost'}>
        <div className="new mypost push ">
          + Create new post
        </div>
      </Link>


      <div className="posts-container">

        {posts.length > 0 
          ? posts.map(post =>(
            <div className="mypost" key={post._id}>
              <div className="post-title">
                {post.title}
              </div>
              <div className="img-container">
                <img className="img" src={`${post.image}`} /> 
                {/* <Image src={`${post.image}`} layout="responsive" /> */}
              </div>
              <div className="post-description">

                {post.description}
 
              </div>
              <div>
                {post.expand}
              </div>
              <Link href={`/posts/${post._id}`}>
                <a href="">ir</a>
              </Link>
              <div className="btn-container">
                <Link href={`/admin/post/${post._id}`}>
                  <button className="btn-admin btn-edit push">EDIT</button>
                </Link>
                
                <button onClick={()=>reqDelete(post._id)} className="btn-admin btn-delete push">DELETE</button>
              </div>
            </div>

          ))
          : <Notfound type="Projects" />
        }
      </div>
      
    </section>

  )
}
  

