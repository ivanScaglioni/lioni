
import { useRouter} from "next/router";
import { useState } from "react";
import Notfound from "components/notfound";
export default function LoginPage(){
    
    const router = useRouter();
    
    const [pass, setPass ] = useState("");

    const handlepass = (e)=>{

        setPass(e.target.value);

       
    };

    

    const handlelogin = async(e)=>{
        e.preventDefault();
        const res = await fetch('api/auth',{method:'POST', body: JSON.stringify(pass)})
        if(res.status == 200){
            router.push({
                pathname:'/admin',
                auth: `${document.cookie}`
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


