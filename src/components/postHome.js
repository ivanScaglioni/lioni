

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

import arrowBack from '#public/icons/arrow_back_black.svg';


export default function PostHome({ posts }) {



  const [ind , setInd ] = useState(0);
  const len = posts.length;
  const [myPost, setPost] = useState(posts[0]);
  
  function reset(){
    setInd(0)
  }



  const handleDate = (d) => {
    const date = new Date(d)
    const prettyDate = date.toLocaleDateString()
    return (prettyDate)
  }

  useEffect(() => {
  
   handleBar(0);

    
    
  }, []);





  const handleBar = (i) => {
    const probar = document.getElementById('bar');
    if (len > 0){
      const porcien = 100 / len;
      
      probar.style.width=`${++i*porcien}%`
      
    }
  

  }
  




  const handlePost =  (e) => {
    const myElement = document.getElementById('a');
    if (e.target.id == 'btn-left') {
      if (myElement.className.includes('moveleft')) {
        myElement.className = myElement.className.replace('moveleft', 'move-left')
      } else if (myElement.className.includes('move-left')) {
        myElement.className = myElement.className.replace('move-left', 'moveleft')
      } else if (myElement.className.includes('move-right')) {
        myElement.className = myElement.className.replace('move-right', 'move-left')
      } else if (myElement.className.includes('moveright')) {
        myElement.className = myElement.className.replace('moveright', 'move-left')
      }
      if ( ind == 0) {
        ind=len-1;
        setInd(len-1);
        setPost(posts[ind]);

      }else{
        setInd(--ind)
        setPost(posts[ind])
      }
    } else if (e.target.id == 'btn-right') {
      if (myElement.className.includes('moveright')) {
        myElement.className = myElement.className.replace('moveright', 'move-right')
      } else if (myElement.className.includes('move-right')) {
        myElement.className = myElement.className.replace('move-right', 'moveright')
      } else if (myElement.className.includes('move-left')) {
        myElement.className = myElement.className.replace('move-left', 'move-right')
      } else if (myElement.className.includes('moveleft')) {
        myElement.className = myElement.className.replace('moveleft', 'move-right')
      }
      
      if ( ind == (len-1)) {
        
        ind=0;
        setInd(0);
        setPost(posts[ind])

        
      }else{
        setInd(++ind);
        setPost(posts[ind]);

      }
    }

    // console.log("salida: ", ind)

    handleBar(ind);



  }



  return (
    <div className="home-section">
      

      <Link href="/posts">
        <div className="title push">BLOG</div>
      </Link>

                    
      <div className="wheel">
        
        <button type="" className="btn-wheel btn-back" onClick={handlePost} id="btn-left" ></button>

        <div className="ball-container"><div className="progresive-bar" id="bar"></div></div>

        <button type="" className="btn-wheel btn-next" onClick={handlePost} id="btn-right" ></button>
       
      </div>

     
              
      <div className="post-card card moveleft card-home" id="a">

  

          <div className="card-header">
            <Link href={`/posts/${myPost._id}`}>
              <h2 className="push">{myPost.title}</h2>
            </Link>
          </div>
          <div className="card-date">{new Date(myPost.createdAt).toLocaleDateString()}</div>
          {myPost.image != undefined &&

            <div>
              <img className="card-img" src={`${myPost.image}`} />
            </div>


          }


          
          <div className="card-description">
            {myPost.description}
          </div>
      </div>

       
    



      

          


  
    </div>

    
  )
}