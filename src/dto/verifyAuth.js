import { jwtVerify } from "jose";

export async function verifyAuth(cook) {

    
    


    try {
        var jwt=cook;
        const arrCookies = cook.split(';')
        for (let index = 0; index < arrCookies.length; index++) {
            if(arrCookies[index].includes('authorization=')){
                
                jwt = arrCookies[index].trim().substring(14);
                break;
            };
            
        }
        
        const encoder = new TextEncoder();
        const data = await jwtVerify(jwt, encoder.encode(process.env.PRIVATE_KEY))
        return (true);
    } catch (error) {

        return (false);
    }




    

}


