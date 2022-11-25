

const marked  = require('marked');
import { useState } from "react"
import { useRouter } from "next/router";
const axios = require('axios');






export default function NewPost(){

    const router =useRouter();
    const [newPost, setNewPost ] = useState({});


    const handleChangePost = (e)=>{
        setNewPost({
            ...newPost,
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

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const res  = await axios({
            url: '/api/post',
            method: 'POST',
            data: newPost,
        })
        if(res.status == 200){
            
            router.push('/admin/post');
        }


    }


    return(
        <div className="container-edit">
            
        <h1 className="space edit-title">New Post</h1>
            <div id="response-ok" className="editor-layout">
         
                    
                    
                    <form className="form-new">
                        
                        <input className="input-new" type="text" name="title" placeholder="title" onChange={handleChangePost} value={newPost.title}/> 
                        <textarea className="input-new extra-h"  type="text" name="description"  onChange={handleChangePost} placeholder="description of post" value={newPost.description} />
                        <textarea className="input-new extra-h" type="text" name="expand" placeholder="body of post" onChange={(e)=>{goToHTML(e)}} value={newPost.expand}/>
                        <input className="input-new" type="text" name="image" placeholder="url of image"onChange={handleChangePost} value={newPost.image} />
                        <input className="input-new" type="text" name="website" placeholder="url of website" onChange={handleChangePost} />
                        <input className="input-new" type="text" name="github" placeholder="url of github" onChange={handleChangePost}/>
                        <button className="submit-new push " type="submit" onClick={handleSubmit}>submit</button>   
                    </form>

   
                <div className="card-expand" id="marked-area">
                    
                </div>
            </div>

            
            
        
    </div>
    )
}

