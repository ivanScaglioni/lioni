
import { dbConnect } from "utils/mongoose";
import Post from "models/Post.model.js";
import {isValidObjectId} from "mongoose"

dbConnect();


export default async (req, res) => {

    const{method, body, query:{id}} = req;

    console.log(body, method)

    const isId = isValidObjectId(id);

    if(!isId)return res.status(400).json("no valid id received");

    switch (method) {

        case "GET":
            
            const post = await Post.findById(id);
            if(!post) return res.status(404).json({msg:"post not found"});
            return res.status(200).json(post);


           
           
        case "PUT":
            const upPost =  await Post.findByIdAndUpdate(id,body,{
                new : true,
            });
            if(!upPost) return res.status(404).json({msg:"post not found"});
            return res.status(201);



        case "DELETE":
            const deletePost = await Post.findByIdAndDelete(id);
            if(!deletePost) return res.status(404).json({msg:"post not found"})
            return res.status(204).json();
        
        
        
        default:
            return res.status(400).json({msg:"this method is not supported"})
    }


};