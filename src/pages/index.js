import Link from "next/link";
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
        const res = await axios.get('/api/post');
        const resproj = await axios.get('/api/project');
        setPosts(res.data)
        setProjects(resproj.data)
        console.log(posts)
    }
    
 

    useEffect(() => {
        data();
        
      }, []); 

 
  



  return (

    <div className="container-v home">

      <section className="home-section home-about"><CompAbout page="Home"/></section>
      
      
      {projects.length > 0
        ?<section id="section-porj"><ProjectHome projects={projects} /></section>
        : <Notfound type="Projects" />
      }
      

      {posts.length > 0
        ?<section  id="section-post"><PostHome posts={posts}/></section>
        :<Notfound type="Posts" />
      }
      
     
    
    
    </div>
  )


}




