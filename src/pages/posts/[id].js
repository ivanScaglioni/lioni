
const { marked } = require('marked');
import Notfound from "components/notfound";
import { useEffect, useState } from "react";
const axios = require('axios');


export default function PostDetail({id}){

    const [post, setPost] = useState({});
    
    
    async function data(){
  
        const res = await axios.get(`/api/post/${id}`);

        if (res.statusText == 'OK'){
            
            setPost(res.data);
            handleMd(res.data.expand);
        }


        
        
    }
    
    const handleMd = (mydata)=>{
        if (mydata != null){

            const expandMd = document.getElementById('expand');
            expandMd.innerHTML = marked.parse(mydata);

        }
        
    }

  
    useEffect(() => {
        data();
        
    }, []); 
  
   
    
  
   
    
    return(

        <div className="container-v space">
            <div className="card container-v">
                {post.title  != undefined 


                ?
                <div>
                    <div className="card-header">
                        <h2>{post.title}</h2>
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
                </div>
                    
                :
                <Notfound/>
                }
                <div className="md card-expand" id="expand"></div>
            </div>

          
            
            
        </div>
        
       
       
        
    )
}


export  async function getServerSideProps({query:{id}}){

 
    return{
        props:{id}
    }


}