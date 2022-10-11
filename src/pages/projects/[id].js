import Link from "next/link";
import Nofound from "components/notfound.js"
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
const axios = require('axios');

export default function ProjectDetail({id}){

    
  const [proj, setProjects] = useState({});
    
  async function data(){

      const resproj = await axios.get(`/api/project/${id}`);
  
      setProjects(resproj.data)

  }
  


  useEffect(() => {
      data();
      
    }, []); 


   
    
  

    return(
        <div>
            {
                
            }
            <div className="card-project">
                <div>
                  {proj.title}
                </div>

                <div className="card-img">
                  
                </div>
                <div className="card-description">
                  {proj.description}
                </div>
                <button type="button" onClick={() => window.history.go(-1)}>
                    Click me
                </button>

            </div>
        </div>
    )
}


export async function getServerSideProps({query:{id}}){
    
   
    return{
        props: {id}
    }

}