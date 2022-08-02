export default function PostDetail({post}){
   
    
    return(
        <div className="card-post">
            <div>
              {post.title}
            </div>
            <div className="card-img">
            {post.image != undefined &&
                  
                  <div className="card-img">
                    <img className="image" src={`${post.image}`} />
                  </div> 


                }
            </div>
            <div>
                <p>
                {post.description}
                </p>
                <p>
                {post.expand}
                </p>
            </div>
        </div>
    )
}


export  async function getServerSideProps({query:{id}}){

    const res = await  fetch(`${process.env.HOST}/api/post/${id}`)
    if(!(res.status === 200 )) return{props:{}};
    const data = await res.json()

    return{
        props:{post:data}
    }


}