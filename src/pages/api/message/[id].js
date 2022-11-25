import { dbConnect } from "utils/mongoose.js";
import Message from "models/Message.model.js";
import {isValidObjectId} from "mongoose";
import { verifyAuth } from "dto/verifyAuth.js";

dbConnect();


export default async (req, res) => {

    const{method, query:{id}} = req;


    const isId = isValidObjectId(id);
    if(!isId)return res.status(400).json("no valid id received");


    const isLogin = await verifyAuth(req.headers.cookie);

    switch (method) {

        case "DELETE":
            if(isLogin){
                const deleteMsg = await Message.findByIdAndDelete(id);
                if(!deleteMsg) return res.status(404).json({msg:"msg not found"});
                return res.status(200).json({iid:`${id}`});
            }else{
                return res.status(404).json({msg:"Not authorized"});
            };
        default:
            return res.status(400).json({msg:"this method is not supported"});
    }


};