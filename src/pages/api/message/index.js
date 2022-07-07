import { dbConnect } from "utils/mongoose.js";
dbConnect()

import Message from "#models/Message.js";





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
                const newMsg = new Message(body);
                const saveMsg = await newMsg.save();
                console.log(saveMsg);
                return res.status(201).json("message saved successfully");
            } catch (error) {
                return res.status(400).json({error:error.message});
            }

         
        
        default:
            return res.status(400).json({msg:"this method is not supported"})

    }


}