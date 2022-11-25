import Link from "next/link";
import Notfound from "components/notfound";
const axios = require('axios');
import { useEffect ,useState } from "react";
import addsvg from '#public/icons/add.svg';


export default  function AdminPosts(props) {

    const [posts, setPosts] = useState({});
    const [ add , setAdd ] = useState('none');
    
    async function data(){
        const res = await axios.get('/api/post');
        if(res.status == 200 && res.data.length > 0 ){
          setPosts(res.data);
        }else{
          const ok = document.getElementById('response-ok').style.display = "none";
          const err = document.getElementById('response-error').style.display = "flex";
        }
     
    }
    
    const reqDelete = async (id)=>{
      const res = await axios({
        method: 'DELETE',
        url: `../api/post/${id}`,

      });
      if(res.status == 200){
        const deletePost = document.getElementById(res.data.iid).style.display ="none"; 
      }
    }

    useEffect(() => {
        data();
        setAdd(addsvg.src);
      }, []); 

  return (
    <section className="container-v">

      <h1 className="space title">Blog</h1>
      <Link href={'post/newpost'}>
        <div className="new mypost push ">
        <img src={add} alt="" />
        </div>
      </Link>


      <div id="response-ok" className="posts-container">
        {posts.length > 0 
          ? posts.map(post =>(
          
            <div className="card card-home" key={post._id}  id={post._id}>
              <div className="card-header">
                <Link href={`/posts/${post._id}`}>
                  <a href="" className="a-push"> <h2 className="push">{post.title}</h2> </a>

                </Link>
              </div>
              <div className="card-date">{new Date(post.createdAt).toLocaleDateString()}</div>
              {post.image != undefined &&
                <div>
                  <img className="card-img" src={`${post.image}`} />
                </div>
              }
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

      <div id="response-error">
        <Notfound type="Projects" status="error" />
      </div>
      
    </section>

  )
}
  

