import Notfound from "components/notfound"
import Link from "next/link"

export default function PostDetail({messages}){
   
  
  return(
    <div>

      <h1>Menssages</h1>
      {messages.length > 0 
        ? messages.map(msg =>(
          <div className="card-post">
            <div>
              {msg.name}
            </div>
 
            <div>
                <p>
                    {msg.msg4me}
                </p>
            </div>
            {msg.conctact != undefined &&

              <div>
                {msg.contact}
              </div>

            }
            <Link href={'/admin/messages/${msg._id}'}>
              <a href="">ir</a>
            </Link>
          </div>
        ))
        : <Notfound type="Messages" />
      }

    </div>
    )
}


export  async function getServerSideProps(ctx){

  
    const res = await  fetch(`${process.env.HOST}/api/message`)
    if(res.status === 403 ){
      return{
        props:{messages:{}}
      }
    };
    const data = await res.json()
    
    return{
      props:{messages : data}
    }


}