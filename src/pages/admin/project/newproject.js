
const marked  = require('marked');
import { useState } from "react"
const axios = require('axios');
import { useRouter } from 'next/router'





export default function NewProject(){

    const [newProj, setNewProj ] = useState({});
    const router = useRouter();

    const handleChangePost = (e)=>{
        setNewProj({
            ...newProj,
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
            url: '/api/project',
            method: 'POST',
            data: newProj,
        })
        if(res.status == 200){
            
            router.push('/admin/project');
        }


    }


    return(
        <div className="container-edit">
            
            
            <h1 className="space edit-title">New Project</h1>



            <div  className="editor-layout">
            
                    
                    
                    <form className="form-new">
                        
                        <input className="input-new" type="text" name="title" placeholder="title" onChange={handleChangePost} value={newProj.title}/> 
                        <textarea className="input-new extra-h"  type="text" name="description"  onChange={handleChangePost} placeholder="description of project" value={newProj.description} />
                        <textarea className="input-new extra-h" type="text" name="expand" placeholder="body of project" onChange={(e)=>{goToHTML(e)}} value={newProj.expand}/>
                        <input className="input-new" type="text" name="image" placeholder="url of image"onChange={handleChangePost} value={newProj.image} />
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