import Link from "next/link";
import Notfound from "components/notfound";
import Image from "next/image";
import  {getSession, useSession} from "next-auth/react";


export default  function Posts({posts, admin}) {
  
  console.log(admin)
  return (
    <section>
      <h1>Posts</h1>
      {admin == true && 
          <Link href={'/posts/new'}>
            create new post
          </Link>
      }
      {posts.length > 0 
        ? posts.map(post =>(
          <div className="card-post">
            <div>
              {post.title}
            </div>
            <div className="card-img">
              <img src={`${post.image}`} /> 
               {/* <Image src={`${post.image}`} layout="responsive" /> */}
            </div>
            <div>
            <p>
              {post.description}
            </p>
            </div>
            <Link href={`/posts/${post._id}`}>
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
  
  let boolSession = false;
  const session = await getSession(context);
  const resPost = await fetch(`${process.env.HOST}/api/post`)
  const dataPost = await resPost.json()
  
  if(session != null ){
    if(session.user.email == process.env.GMAIL){
      boolSession= true 
    }
  }


 

  return {
    props: { posts: dataPost, admin: boolSession} 
  }
}


