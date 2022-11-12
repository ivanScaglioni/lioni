

import { useEffect, useState } from "react";
const axios = require('axios')

export default function EditPost({id}){


    const [ post ,setPost ] = useState({
        title:"",
        descripttion:"",
        expand:"",
        image:"",
        website:"",
        github:""
    })
    
    async function getPost(){
        const res = await axios.get(`/api/post/${id}`);
        setPost(res.data)
    }
        
    const handleRequest = async (e)=>{
        e.preventDefault();
        const res  = await axios({
            url: `/api/post/${id}`,
            method: 'PUT',
            data: post,
           
        })
        
    }

    const handleChangePost = (e)=>{
        setPost({
            ...post,
            [e.target.name]: e.target.value,
        })
    }



    useEffect(() => {
        getPost();
    }, []); 


    return(
        <div >
            <form className="form-new">
                <h1>Edit post</h1>
                <input className="input-new" type="text" name="title" placeholder="title" onChange={handleChangePost} value={post.title}/> 
                <textarea className="input-new" rows="5" cols="30" type="text" name="description"  onChange={handleChangePost} placeholder="little description of post" value={post.description} />
                <textarea className="input-new" rows="5" cols="30" type="textA" name="expand" placeholder="body of post" onChange={handleChangePost} value={post.expand}/>
                <input className="input-new" type="text" name="image" placeholder="url of image"onChange={handleChangePost} value={post.image} />
                <input className="input-new" type="text" name="website" placeholder="url of website" onChange={handleChangePost} />
                <input className="input-new" type="text" name="github" placeholder="url of github" onChange={handleChangePost}/>
                <button className="input-new push " type="submit" onClick={handleRequest}>submit</button>   
            </form>
        </div>
    )
}


export async function getServerSideProps({query:{id}}) {
    console.log(id)
    return {
      props: {id},
    }
  }