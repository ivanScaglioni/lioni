
const marked  = require('marked');
import Notfound from "components/notfound";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const axios = require('axios');

export default function EditPost({id}){

    const router = useRouter();
    const [ post ,setPost ] = useState({})
    
   

    async function getPost(){
        const res = await axios.get(`/api/post/${id}`);
        if (res.status == 200){
            setPost(res.data);
        }else{
            const ok = document.getElementById('response-ok').style.display = "none";
            const err = document.getElementById('response-error').style.display = "flex";
        }
        
       
        

    }
        
    const handleRequest = async (e)=>{
        e.preventDefault();
        const res  = await axios({
            url: `/api/post/${id}`,
            method: 'PUT',
            data: post,
           
        })
        if(res.status == 200){
            router.push('/admin/post');
        }



        
    }

    const handleChangePost = (e)=>{
    
        setPost({
            ...post,
            [e.target.name]: e.target.value,
        });
       
        
    }

    const goToHTML = (e)=>{
        
        const mdArea = document.getElementById('marked-area');
        if(e != null){
            mdArea.innerHTML = marked.parse(e.target.value);
        }
        handleChangePost(e);
        
    }


    useEffect(() => {
        
       
        if(post.expand != null){
            const mdArea = document.getElementById('marked-area')
            mdArea.innerHTML = marked.parse(post.expand);
        }else{
            getPost();
        }

        
    }, [post]); 


    return(
        <div className="container-edit">
            
            <h1 className="space edit-title">Edit post</h1>
                <div id="response-ok" className="editor-layout">
                    {post.title != null
                        ?
                        
                        <form className="form-new">
                            
                            <input className="input-new" type="text" name="title" placeholder="title" onChange={handleChangePost} value={post.title}/> 
                            <textarea className="input-new extra-h"  type="text" name="description"  onChange={handleChangePost} placeholder="description of post" value={post.description} />
                            <textarea className="input-new extra-h" type="text" name="expand" placeholder="body of post" onChange={(e)=>{goToHTML(e)}} value={post.expand}/>
                            <input className="input-new" type="text" name="image" placeholder="url of image"onChange={handleChangePost} value={post.image} />
                            <input className="input-new" type="text" name="website" placeholder="url of website" onChange={handleChangePost} value={post.website} />
                            <input className="input-new" type="text" name="github" placeholder="url of github" onChange={handleChangePost} value={post.github}/>
                            <button className="submit-new push " type="submit" onClick={handleRequest}>submit</button>   
                        </form>
                        :
                        <Notfound status="loading"/>

                    }
                    <div className="card-expand" id="marked-area">
                        
                    </div>
                </div>

                <div id="response-error">
                    <Notfound status="error"/>
                </div>
                
                
            
        </div>
    )
}


export async function getServerSideProps({query:{id}}) {
    
    return {
      props: {id}
    }
  }