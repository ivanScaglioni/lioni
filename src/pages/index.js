import Link from "next/link";
import { useRouter } from 'next/router';
import CompAbout from "components/compAbout";
import Notfound from "components/notfound.js";
import Head from "next/head";


export default function HomePage(props) {
  const router = useRouter()
  const posts = props.posts;
  const projects = props.projects;
  
  return (

    <div className="container-v home">
      <Head>
        <title>ivanScaglioni</title>
        
      </Head>
      <section className="home-section">
        <CompAbout page="Home"/>
      </section>
      <section className="home-section home-proj">
        <Link href="/projects">
          <div className="title push">PROJECTS</div>
        </Link>
        <div className="card-container">
          {projects.length > 0 
            ? projects.map((proj) =>(
              <div key={proj._id} className="home-proj card-home">
                <div className="card-header">
                  <Link href={`/projects/${proj._id}`} page="Home" >
                    <h2 className="push">{proj.title}</h2>
                  </Link>
                  
                </div>
                {proj.image != undefined &&
                  
                  <div className="card-img">
                    <img className="image" src={`${proj.image}`} />
                  </div> 


                }
                <p>
                {proj.description}
                </p>
                <div className="card-description">
                  <p>{proj.description}</p>
                </div>

              </div>
            ))
            : <Notfound type="Projects" />
          }


        </div>


      </section>
      <section className="home-section home-posts">
        <Link href="/posts">
          <div className="title push">POSTS</div>
        </Link>  
        <div className="card-container">

          {posts.length > 0 
            ? posts.map(post =>(
              <div key={post._id} className="home-post card-home">
                <div className="card-header">
                <Link href={`/posts/${post._id}`}>
                  <h2 className="push">{post.title}</h2>
                  
                </Link>                  
                </div>

                {post.image != undefined &&

                  <div className="card-img">
                    <img className="image" src={`${post.image}`} />
                  </div> 


                }

                                   
               

                               
                
                <p className="card-description">
                  {post.body}
                </p>

              </div>
            ))
            : <Notfound type="Post" />
          }

        </div>

      </section>
    </div>
  )


}



export async function getServerSideProps(context) {

  
  const resPost = await fetch(`${process.env.HOST}/api/post/home`)
  const dataPost = await resPost.json()
  const resProj = await fetch(`${process.env.HOST}/api/project/home`)
  const dataProj = await resProj.json()



  return {
    props: { posts: dataPost, projects: dataProj} // will be passed to the page component as props
  }
}

