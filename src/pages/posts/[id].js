
import Layout from "components/layout";
import Notfound from "components/notfound";
import { useEffect, useState } from "react";
const axios = require('axios');

export default function PostDetail({id}){

    const [post, setPost] = useState({});
    
    async function data(){
  
        const res = await axios.get(`/api/post/${id}`);
    
        setPost(res.data)
  
    }
    
  
  
    useEffect(() => {
        data();
        
      }, []); 
  
   
    
    return(

        <div className="container-v space">
            {post.title != undefined
                ?<div className="card">
                    <h2>{post.title}</h2>
                    <div className="card-img">
                    {post.image != undefined &&
                        
                        <div>
                            <img className="card-img" src={`${post.image}`} />
                        </div> 
        
        
                        }
                    </div>
                    <div>
                        <p>
                        {post.description}
                        </p>
                        <div>
                        {post.expand}
                        </div>
                    </div>
                </div>
                :<Notfound></Notfound>

            }
            
            
        </div>
        
       
       
        
    )
}


export  async function getServerSideProps({query:{id}}){

 
    return{
        props:{id}
    }


}