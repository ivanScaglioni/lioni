
import CompAbout from "components/compAbout";
import PostHome from "components/postHome";
import ProjectHome from "components/projectHome";
import Notfound from "components/notfound";
const axios = require('axios');
import { useEffect ,useState } from "react";

export default  function HomePage(props) {
  

  const [posts, setPosts] = useState({});
  const [projects, setProjects] = useState({});
    
    async function data(){
        const res = await axios.get('/api/post/home');
        const resproj = await axios.get('/api/project/home');
        setPosts(res.data);
        setProjects(resproj.data);
    }
    
 

    useEffect(() => {
        data();
        
      }, []); 

 
  



  return (

    <div className="container-v container-gap">

      <section className="home-section home-about"><CompAbout page="Home"/></section>
    

      {projects.length > 0
        ?<section id="section-proj"><ProjectHome projects={projects} /></section>
        :<Notfound type="Projects" status="loading" />
      }
      

      {posts.length > 0
        ?<section  id="section-post"><PostHome posts={posts}/></section>
        :<Notfound type="Posts" status="loading" />
      }
      
      
     
    
    </div>
  )


}




