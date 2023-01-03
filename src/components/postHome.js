

import Link from "next/link";
import { useState, useEffect } from "react";



export default function PostHome({ posts }) {



  const [ind, setInd] = useState(0);
  const len = posts.length;
  const [myPost, setPost] = useState(posts[0]);




  useEffect(() => {

    handleBar(0);


  }, []);





  const handleBar = (i) => {
    const probar = document.getElementById('bar');
    if (len > 0) {
      const porcien = 100 / len;

      probar.style.width = `${++i * porcien}%`

    }


  }





  const handlePost = (side) => {
    const myElement = document.getElementById('a');
    if (side == 'btn-left') {
      if (myElement.className.includes('moveleft')) {
        myElement.className = myElement.className.replace('moveleft', 'move-left')
      } else if (myElement.className.includes('move-left')) {
        myElement.className = myElement.className.replace('move-left', 'moveleft')
      } else if (myElement.className.includes('move-right')) {
        myElement.className = myElement.className.replace('move-right', 'move-left')
      } else if (myElement.className.includes('moveright')) {
        myElement.className = myElement.className.replace('moveright', 'move-left')
      }
      if (ind == 0) {
        ind = len - 1;
        setInd(len - 1);
        setPost(posts[ind]);

      } else {
        setInd(--ind)
        setPost(posts[ind])
      }
    } else if (side == 'btn-right') {
      if (myElement.className.includes('moveright')) {
        myElement.className = myElement.className.replace('moveright', 'move-right')
      } else if (myElement.className.includes('move-right')) {
        myElement.className = myElement.className.replace('move-right', 'moveright')
      } else if (myElement.className.includes('move-left')) {
        myElement.className = myElement.className.replace('move-left', 'move-right')
      } else if (myElement.className.includes('moveleft')) {
        myElement.className = myElement.className.replace('moveleft', 'move-right')
      }

      if (ind == (len - 1)) {

        ind = 0;
        setInd(0);
        setPost(posts[ind])


      } else {
        setInd(++ind);
        setPost(posts[ind]);

      }
    }



    handleBar(ind);



  }



  return (
    <div className="home-section">


      <Link href="/posts">
        <div className="title push">BLOG</div>
      </Link>


      <div className="wheel">

        <button type="" className="btn-wheel btn-back" onClick={()=>handlePost("btn-left")} id="btn-left" ></button>

        <div className="ball-container"><div className="progresive-bar" id="bar"></div></div>

        <button type="" className="btn-wheel btn-next" onClick={()=>handlePost("btn-right")} id="btn-right" ></button>

      </div>



      <div className="post-card card moveleft card-home" id="a">

        <div className="card-header">
        
          <Link href={`/posts/${myPost._id}`}>
            <a href="" className="a-push"> <h2 className="push">{myPost.title}</h2> </a>
          </Link>
         
        </div>
        
        {myPost.image != undefined &&

          <div>
            <img className="card-img" src={`${myPost.image}`} />
          </div>


        }
        <div className="card-date">{new Date(myPost.createdAt).toLocaleDateString()}</div>
        <div className="card-description">
          {myPost.description}
        </div>
        
        <div className="card-links">
          {myPost.github != undefined &&
            
            <a className="card-link"href={myPost.github}>{'-'} Github</a>
         
          }
          {myPost.website != undefined &&
            
            <a className="card-link" href={myPost.website}>{'-'} Website </a>
            
          }
        </div>


      </div>












    </div>


  )
}