import Link from "next/link";
import Notfound from "components/notfound";
const axios = require('axios');
import { useEffect ,useState } from "react";



export default  function Projects() {
  
  
  const [projs, setProjs] = useState({});

    
  async function data(){
      const res = await axios.get('/api/project');
      if(res.status == 200){
        setProjs(res.data);
      }else{
        const ok = document.getElementById('response-ok').style.display = "none";
        const err = document.getElementById('response-error').style.display = "flex";
      }
      
    

  }
    
 

  useEffect(() => {
      data();
      
  }, []); 


  
  return (
    <section className="container-v">
      <h1 className="space title">Projects</h1>
      <div id="response-ok" className="projs-container">
        {projs.length > 0 
          ? projs.map(proj =>(
            <div className="card" key={proj._id}>
              

              <div className="card-header">
              <Link href={`/projects/${proj._id}`}>
              <a href="" className="a-push"> <h2 className="push">{proj.title}</h2> </a>
              </Link>
              </div>


              <div className="card-date">{new Date(proj.createdAt).toLocaleDateString()}</div>
              
              <div>
                <img className="card-img" src={`${proj.image}`} /> 
              </div>
              
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

          ))
          : <Notfound type="project" status="loading" />
        }
      </div>

      <div id="response-error">
        <Notfound type="project" status="error" />
      </div>
      
    </section>
  )
}
  

