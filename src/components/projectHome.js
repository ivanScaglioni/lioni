
import Link from "next/link";
import { useState, useEffect } from "react";



export default function ProjectHome({ projects }) {



  const [indProj, setIndProj] = useState(0);
  const lenProj = projects.length;
  const [myProj, setProj] = useState(projects[0]);


  const handleDateProj = (d) => {
    const dateProj = new Date(d)
    const prettyDateproj = dateProj.toLocaleDateString()
    return (prettyDateproj)
  }


  useEffect(() => {

    handleBarProj(0);

  }, [])

  const handleBarProj = (i) => {
    const barProj = document.getElementById('bar-proj');
    if (lenProj > 0) {
      const porciento = 100 / lenProj;

      barProj.style.width = `${++i * porciento}%`
    }

  }

  const handleProj = (e) => {
    const cardProj = document.getElementById('b');
    if (e.target.id == 'btn-left-proj') {
      if (cardProj.className.includes('moveleft')) {
        cardProj.className = cardProj.className.replace('moveleft', 'move-left')
      } else if (cardProj.className.includes('move-left')) {
        cardProj.className = cardProj.className.replace('move-left', 'moveleft')
      } else if (cardProj.className.includes('move-right')) {
        cardProj.className = cardProj.className.replace('move-right', 'move-left')
      } else if (cardProj.className.includes('moveright')) {
        cardProj.className = cardProj.className.replace('moveright', 'move-left')
      }
      if (indProj == 0) {
        indProj = lenProj - 1;
        setIndProj(lenProj - 1);
        setProj(projects[indProj]);

      } else {
        setIndProj(--indProj)
        setProj(projects[indProj])
      }

    } else if (e.target.id == 'btn-right-proj') {
      if (cardProj.className.includes('moveright')) {
        cardProj.className = cardProj.className.replace('moveright', 'move-right')
      } else if (cardProj.className.includes('move-right')) {
        cardProj.className = cardProj.className.replace('move-right', 'moveright')
      } else if (cardProj.className.includes('move-left')) {
        cardProj.className = cardProj.className.replace('move-left', 'move-right')
      } else if (cardProj.className.includes('moveleft')) {
        cardProj.className = cardProj.className.replace('moveleft', 'move-right')
      }

      if (indProj == (lenProj - 1)) {

        indProj = 0;
        setIndProj(0);
        setProj(projects[indProj])


      } else {
        setIndProj(++indProj);
        setProj(projects[indProj]);

      }
    }

    handleBarProj(indProj);

  }



  return (
    <div className="home-section">

      <Link href="/projects">
        <div className="title push">PROJECTS</div>
      </Link>

      <div className="wheel">

        <button type="" className="btn-wheel btn-back" onClick={handleProj} id="btn-left-proj" ></button>

        <div className="ball-container"><div className="progresive-bar" id="bar-proj"></div></div>

        <button type="" className="btn-wheel btn-next" onClick={handleProj} id="btn-right-proj" ></button>

      </div>



      <div className="post-card card moveleft card-home" id="b">



        <div className="card-header">
          <Link href={`/projects/${myProj._id}`}>
            <a href="" className="a-push"> <h2 className="push">{myProj.title}</h2> </a>
           
          </Link>
        </div>
        <div className="card-date">
          <div>{`${handleDateProj(myProj.createdAt)}`}</div>
        </div>

        {myProj.image != undefined &&

          <div>
            <img className="card-img" src={`${myProj.image}`} />
          </div>


        }



        <div className="card-description">
          {myProj.description}
        </div>

        <div className="card-links">
          {myProj.github != undefined &&
            
            <a className="card-link"href={myProj.github}>{'-'} Github</a>
         
          }
          {myProj.website != undefined &&
            
            <a className="card-link" href={myProj.website}>{'-'} Website </a>
            
          }
        </div>
      </div>


    </div>

  )
}