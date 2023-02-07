
import { useRouter} from "next/router";
import { useState } from "react";
import Notfound from "components/notfound";
export default function LoginPage(){
    
    const router = useRouter();
    
    const [pass, setPass ] = useState("");

    const handlepass = (e)=>{

        setPass(e.target.value);

       
    };

    const readCookie = (name)=> {

        var nameEQ = name + "="; 
        var ca = document.cookie.split(';');
      
        for(var i=0;i < ca.length;i++) {
      
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1,c.length);
          if (c.indexOf(nameEQ) == 0) {
            return decodeURIComponent( c.substring(nameEQ.length,c.length) );
          }
      
        }
      
        return null;
      
      }

    const handlelogin = async(e)=>{
        e.preventDefault();
        const res = await fetch('api/auth',{method:'POST', body: JSON.stringify(pass)})
        if(res.status == 200){
            router.push({
                pathname:'/admin',
                auth: `${readCookie('authorization')}`
            });
        }else{
            const responseerror = document.getElementById('response-error').style.display="flex";
            const timererror = setTimeout(()=>{
                const responsenone = document.getElementById('response-error').style.display="none";
            },2000)
        }
        
        
    };

    return(

        <div className="container-log container-v">
            <div className="form-login">
                <p>ADMIN</p>
                <input className="input-login pass" type="password" name="pass" placeholder="password" onChange={handlepass} value={pass}/>
                <button className="input-login log-in push" type="submit"  onClick={handlelogin}>log in</button>
            </div>
            <div id="response-error">
                <Notfound status="error"  />
            </div>

        </div>

    )
}


