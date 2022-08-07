import { dbConnect } from "utils/mongoose";
dbConnect();
import Message from "models/Message.model.js";
import {isValidObjectId} from "mongoose";




export default async (req, res) => {


    const{method, query:{id}} = req;
    

    const isId = isValidObjectId(id);

    if(!isId)return res.status(400).json("no valid id received");



    switch (method) {

        case "GET":
            const proj = await Message.findById(id);
            if(!proj) return res.status(404).json({msg:"Message not found"});
            return res.status(200).json(proj);
        case "DELETE":
           
            const deleteMsg = await Message.findByIdAndDelete(id);
            if(!deleteMsg) return res.status(404).json({msg:"Msg not found"});
            return res.status(204).json();
        
        default:
            return res.status(400).json({msg:"this method is not supported"});
        
       
    }


};