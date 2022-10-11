import Notfound from "components/notfound"
const axios = require('axios');

export default function PostDetail({messages}){
   
  
  const handleDate = (d)=>{
    const date = new Date(d) 
    const prettyDate = date.toLocaleDateString()
    return(prettyDate)
  }


  return(
    <div className="msg-container">

      <h1>Menssages</h1>
      {messages.length > 0 
        ? messages.map(msg =>(
          <div key={msg._id} className="msg">
            <div className="msg-name">

     
              {msg.name}
            </div>
 
            <div className="msg-message">

              {msg.msg4me}
 
            </div>
            {msg.contact != undefined &&

              <div className="msg-contact">
                {msg.contact}
              </div>

            }
            <div className="msg-date">

              {`${handleDate(msg.createdAt)}`}

            </div>
          </div>
        ))
        : <Notfound type="Messages" />
      }

    </div>
    )
}


export  async function getServerSideProps(ctx){

    const res = await  fetch(`${process.env.HOST}/api/message`,{headers: ctx.req.headers})
    
    // const res = await axios({
    //   method: 'GET',
    //   url : `${process.env.HOST}/api/message`,
    //   headers: {'authorization' : `${ctx.req.headers.cookie}`}
 
    // })
    if(res.status != 200 ){
      return{
        props:{messages:{}}
      }
    };

    const data = await res.json()
    return{
      props:{messages : data}
    }


}