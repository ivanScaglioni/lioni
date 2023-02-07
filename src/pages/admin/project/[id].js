
const marked  = require('marked');
import Notfound from "components/notfound";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const axios = require('axios');

export default function EditProject({id}){

    const router = useRouter();
    const [ proj ,setProj ] = useState({})
    
   

    async function getProj(){
        const res = await axios.get(`/api/project/${id}`);
        if (res.status == 200){
            setProj(res.data); 
        }else{
            const ok = document.getElementById('response-ok').style.display = "none";
            const err = document.getElementById('response-error').style.display = "flex";
        }
        
       
        

    }
        
    const handleRequest = async (e)=>{
        e.preventDefault();
        const res  = await axios({
            url: `/api/project/${id}`,
            method: 'PUT',
            data: proj,
           
        })
        if(res.status == 200){
            router.push('/admin/project');
            
        }

        
    }

    const handleChangeProj = (e)=>{
        
        setProj({
            ...proj,
            [e.target.name]: e.target.value,
        });
        console.log(proj)
       
        
    }

    const goToHTML = (e)=>{
        
        const mdArea = document.getElementById('marked-area');
        if(e != null){
            mdArea.innerHTML = marked.parse(e.target.value);
        }
        handleChangeProj(e);
        
    }


    useEffect(() => {
        
       
        if(proj.expand != null){
            const mdArea = document.getElementById('marked-area')
            mdArea.innerHTML = marked.parse(proj.expand);
        }else{
            getProj();
        }

        
    }, [proj]); 


    return(
        <div className="container-edit">
            
            <h1 className="space edit-title">Edit Project</h1>
                <div id="response-ok" className="editor-layout">
                    {proj.title != null
                        ?
                        
                        <form className="form-new">
                            
                            <input className="input-new" type="text" name="title" placeholder="title" onChange={handleChangeProj} value={proj.title}/> 
                            <textarea className="input-new extra-h"  type="text" name="description"  onChange={handleChangeProj} placeholder="description of proj" value={proj.description} />
                            <textarea className="input-new extra-h" type="text" name="expand" placeholder="body of proj" onChange={(e)=>{goToHTML(e)}} value={proj.expand}/>
                            <input className="input-new" type="text" name="image" placeholder="url of image"onChange={handleChangeProj} value={proj.image} />
                            <input className="input-new" type="text" name="website" placeholder="url of website" onChange={handleChangeProj} value={proj.website} />
                            <input className="input-new" type="text" name="github" placeholder="url of github" onChange={handleChangeProj} value={proj.github}/>
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