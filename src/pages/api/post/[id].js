
import { dbConnect } from "utils/mongoose";
import Post from "models/Post.model.js";
import {isValidObjectId} from "mongoose"
import { verifyAuth } from "dto/verifyAuth";

dbConnect();


export default async (req, res) => {

    const{method, body, query:{id}} = req;


    const isId = isValidObjectId(id);
    if(!isId)return res.status(400).json("no valid id received");

  
    const isLogin = await verifyAuth(req.cookies.get('authorization'));



    switch (method) {

        case "GET":
            
            const post = await Post.findById(id);
            if(!post) return res.status(404).json({msg:"post not found"});
            return res.status(200).json(post);           
           
        case "PUT":

            if(isLogin){
                const upPost =  await Post.findByIdAndUpdate(id,body,{
                    new : true,
                });
                if(!upPost) return res.status(404).json({msg:"post not found"});
                return res.status(200).json({msg:"post edit"});
            }else{
                return res.status(404).json({msg:"Not authorized"});
            };

           

        case "DELETE":
            
            if(isLogin){
                const deletePost = await Post.findByIdAndDelete(id);
                if(!deletePost) return res.status(404).json({msg:"post not found"})
                return res.status(200).json({iid:`${id}`});
            }else{
                return res.status(404).json({msg:"Not authorized"});
            };
        default:
            return res.status(400).json({msg:"this method is not supported"})
    }


};