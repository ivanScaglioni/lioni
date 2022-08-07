import { dbConnect } from "utils/mongoose.js";
dbConnect();
import { myAntiHack } from "dto/antiHack";
import Message from "#models/Message.model.js";




export default async function handler(req,res){


    
    const {method, body} = req;

    switch(method){
        case "GET":
            try{

                const msg = await Message.find();
                return res.status(200).json(msg);
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