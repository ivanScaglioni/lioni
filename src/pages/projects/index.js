import Notfound from "components/notfound";
import Link from "next/link";
import Image from "next/image";

export default function Projects(props) {
    const projects = props.projects
    return (
      <section>
          <h1>projects</h1>
          {projects.length > 0 
            ? projects.map(proj =>(
              <div key={proj._id} className="card-project">
                <div>
                  {proj.title}
                </div>
                
                <div className="card-img">
                 
                </div>
                <div className="card-description">
                  {proj.description}
                </div>
                <Link href={`/projects/${proj._id}`} push>
                  <a href="">ir</a>
                </Link>
              </div>
            ))
            : <Notfound type="Projects" />
          }
      </section>
    )
  }
  

export async function getServerSideProps(context) {



  const resProj = await fetch(`${process.env.HOST}/api/project`)
  const dataProj = await resProj.json()



  return {
    props: {projects: dataProj} 
  }
}

