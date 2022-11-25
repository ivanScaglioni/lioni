const { marked } = require('marked');
import Notfound from "components/notfound";
import { useEffect, useState } from "react";
const axios = require('axios');


export default function ProjectDetail({id}){

    const [proj, setProj] = useState({});
    
    
    async function data(){
  
        const res = await axios.get(`/api/project/${id}`);

        if (res.status == 200){
            setProj(res.data);
            handleMd(res.data.expand);

        }else{
            const ok = document.getElementById('response-ok').style.display = "none";
            const err = document.getElementById('response-error').style.display = "flex";
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
            <div id="response-ok" className="card">
                {proj.title  != undefined 


                ?
                <div>
                    <div className="card-header">
                        <h2>{proj.title}</h2>
                    </div>
                    <div className="card-date">{new Date(proj.createdAt).toLocaleDateString()}</div>
                    {proj.image != undefined &&

                        <div>
                            <img className="card-img" src={`${proj.image}`} />
                        </div>

                    }
                    <div className="card-description">
                        {proj.description}
                    </div>
                    <div className="card-links">
                        {proj.github != undefined &&
                        
                        <a className="card-link"href={proj.github}>{'-'} Github</a>
                    
                        }
                        {proj.website != undefined &&
                        
                        <a className="card-link" href={proj.website}>{'-'} Website </a>
                        
                        }
                    </div>                 
                </div>
                    
                :
                <Notfound status="loading"/>
                }
                <div className="md card-expand" id="expand">

                </div>
            </div>

          
            <div id="response-error">
                <Notfound type="Projects" status="error" />
            </div>
      
            
            
        </div>
        
       
       
        
    )
}


export  async function getServerSideProps({query:{id}}){

 
    return{
        props:{id}
    }


}