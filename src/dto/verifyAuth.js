import { jwtVerify } from "jose";

export async function verifyAuth(jwt){


    try {
        const encoder = new TextEncoder();
        const data =  await jwtVerify(jwt,encoder.encode(process.env.PRIVATE_KEY))
        return (true);
    } catch (error) {
        
        return(false);
    }


   
}

