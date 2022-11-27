import { dbConnect } from "utils/mongoose.js";
dbConnect();
import { myAntiHack } from "dto/antiHack";
import { verifyAuth } from "dto/verifyAuth";
import Message from "#models/Message.model.js";




export default async function handler(req,res){


    
    const {method, body} = req;
    const authorization = await req.cookies.get('authorization');

   
    switch(method){
        case "GET":
            try{
                
                if ( await verifyAuth(authorization) ){
                    const msg = await Message.find().sort({'updatedAt': -1});
                    return res.status(200).json(msg);
                }
                return res.status(205).json({msg : "puta"});
        
            }catch(error){
                return res.status(500).json({error:error.message});
            }

        case "POST":
            
            try {   
                const data = await JSON.parse(body);
                const { name, contact, msg4me} = data;

                if( await myAntiHack(name)) return res.status(400).json({msg:"no hacke me please"})
                if(await myAntiHack(contact))return res.status(400).json({msg:"no hacke me please"})
                if( await myAntiHack(msg4me))return res.status(400).json({msg:"no hacke me please"})
                
                const newMsg = new Message(data);
                const saveMsg = await newMsg.save();
                
                return res.status(201).json("message saved successfully");
            } catch (error) {
                return res.status(400).json({error:error.message});
            }

         
        
        default:
            return res.status(400).json({msg:"this method is not supported"})

    }


}