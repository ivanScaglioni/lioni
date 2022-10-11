
import { useRouter } from "next/router";

export default function LoginPage(){
    
    const router = useRouter()
    const handlelogin = async(e)=>{
        e.preventDefault()
        const pass = e.target[0].value
        console.log(pass)
        const res = await fetch('api/auth',{method:'POST', body: JSON.stringify(pass)})
        if(res.status == 200) router.push('/admin');
        
        
    }

    return(

        <div className="container-log">
            <form className="form-login" action="api/auth" method="POST" onSubmit={handlelogin}>
                <p>ADMIN</p>
                <input className="input-login pass" type="password" name="pass" placeholder="password"/>
                <input className="input-login log-in push" type="submit" value="log in"></input>
            </form>
        </div>

    )
}


