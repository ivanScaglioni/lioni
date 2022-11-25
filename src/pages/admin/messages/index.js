import Notfound from "components/notfound"

const axios = require('axios');
import { useEffect, useState } from "react";

export default function PostDetail(prorps){
   
  const [ messages, setMessages] = useState ({});

  
  useEffect(()=>{
    getMessage();

  },[]);

  const handleDate = (d)=>{
    const date = new Date(d) 
    const prettyDate = date.toLocaleDateString()
    return(prettyDate)
  
  }
  
  const getMessage = async ()=>{
    const res = await axios.get('/api/message');
    console.log(res)
    if (res.status == 200 && res.data.length > 0){
      setMessages(res.data);
    }else{
      const ok = document.getElementById('response-ok').style.display = "none";
      const err = document.getElementById('response-error').style.display = "flex";
    }
    
  }

  const reqDelete = async (id)=>{
    const res = await axios({
      method: 'DELETE',
      url: `../api/message/${id}`,

    });
    if(res.status == 200){
      
      const deleteMsg = document.getElementById(res.data.iid).style.display ="none";
     
    }
  }

  return(
    <div className="container-v">

      <h1 className="space">Menssages</h1>
      <div id="response-ok" className="msg-container">
        {messages.length > 0 
          ? messages.map(msg =>(
            <div key={msg._id} className="msg" id={msg._id}>
              <div className="msg-name">
                {msg.name}
              </div>
  
              <div className="msg-message">
                <p className="mini-space">{msg.msg4me}</p>
                {msg.contact != undefined &&

                  <div className="msg-contact">
                    <p>{msg.contact}</p> 
                  </div>

                }
                
              </div>

              <div className="msg-date">

                {`${handleDate(msg.createdAt)}`}

              </div>
              <button className="btn-delete btn-admin push" type="button" onClick={()=>reqDelete(msg._id)} >delete</button>
            </div>
          ))
          : <Notfound type="Messages" status="loading" />
        }
      </div>
        
      <div id="response-error">
        <Notfound type="Messages" status="error" />
      </div>


    </div>
    )
}


