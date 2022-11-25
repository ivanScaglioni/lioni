import Link from "next/link";
import Notfound from "components/notfound";
const axios = require('axios');
import { useEffect ,useState } from "react";
import addsvg from '#public/icons/add.svg';

export default  function AdminProj(props) {

    const [projs, setProjs] = useState({});
    const [ add , setAdd ] = useState('none');
    
    async function data(){
        const res = await axios.get('/api/project');
        if(res.status == 200 && res.data.length > 0 ){
          setProjs(res.data);
        }else{
          const ok = document.getElementById('response-ok').style.display = "none";
          const err = document.getElementById('response-error').style.display = "flex";
        }
     
    }
    
    const reqDelete = async (id)=>{
      const res = await axios({
        method: 'DELETE',
        url: `../api/project/${id}`,

      });
      if(res.status == 200){
        
        const deleteproj = document.getElementById(res.data.iid).style.display ="none";
       
      }
    }

    useEffect(() => {
        data();
        setAdd(addsvg.src);
      }, []); 

  return (
    <section className="container-v">

      <h1 className="space title">PROJECTS</h1>
      <Link href={'project/newproject'}>
        <div className="new mypost push ">
          <img src={add} alt="" />
        </div>
      </Link>


      <div id="response-ok" className="projs-container">
        {projs.length > 0 
          ? projs.map(proj =>(
          
            <div className="card card-home" key={proj._id}  id={proj._id}>
              <div className="card-header">
                <Link href={`/projects/${proj._id}`}>
                  <a href="" className="a-push"> <h2 className="push">{proj.title}</h2> </a>
                 
                </Link>
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
              <div className="btn-container">
                <Link href={`/admin/project/${proj._id}`}>
                  <button className="btn-admin btn-edit push">EDIT</button>
                </Link>
                <button onClick={()=>reqDelete(proj._id)} className="btn-admin btn-delete push">DELETE</button>
              </div>
                
            </div>
          ))
          : <Notfound type="Projects" />
        }

      </div>

      <div id="response-error">
        <Notfound type="Projects" status="error" />
      </div>
      
    </section>

  )
}