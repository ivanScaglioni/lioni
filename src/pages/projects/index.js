import Notfound from "components/notfound";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
const axios = require('axios');

export default function Projects() {
  

  const [projects, setProjects] = useState({});
    
    async function data(){

        const resproj = await axios.get('/api/project');
    
        setProjects(resproj.data)

    }
    
 

    useEffect(() => {
        data();
        
      }, []); 
  
    return (
      <div className="container-v">
          <h1 className="title space">PROJECTS</h1>
          {projects.length > 0 
            ? projects.map(proj =>(
              <div key={proj._id} className="card">
           
                
                <div>
                  <img className="card-img" src={`${proj.image}`} alt="" />
                </div>
                <div className="card-description">
                  {proj.description}
                </div>
                <Link href={`/projects/${proj._id}`} push>
                  <a className="card-a" href="">Read</a>
                </Link>
              </div>
            ))
            : <Notfound type="Projects" />
          }
      </div>
    )
  }
  

