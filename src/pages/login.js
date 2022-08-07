
import { useRouter } from "next/router";

export default function LoginPage(){
    const router = useRouter()
    const handlelogin = async(e)=>{
        e.preventDefault()
        const pass = e.target[0].value
        console.log(pass)
        const res = await fetch('api/auth',{method:'POST', body: JSON.stringify(pass)})
        if(res.status == 200) router.push('/');
        
        
    }

    return(
        <div className="container-v">
            <div className="container-v">
                <form className="form-login" action="api/auth" method="POST" onSubmit={handlelogin}>
                    <p>admin</p>
                    <input className="input-login" type="password" name="pass" placeholder="password"/>
                    <input className="input-login" type="submit" value="log in"></input>
                </form>
            </div>

        </div>
    )
}


