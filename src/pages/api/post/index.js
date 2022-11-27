import { dbConnect } from "utils/mongoose.js";
dbConnect();
import { verifyAuth } from "dto/verifyAuth";
import Post from "#models/Post.model.js";





export default async function handler(req,res){

    const {method, body} = req;
    
    const isLogin = await verifyAuth(req.headers.cookie);

    switch(method){
        case "GET":
            
            const posts = await Post.find().sort({'updatedAt': -1});
            return res.status(200).json(posts);
            
        case "POST":
            if(isLogin){
                try {
                    const newPost = new Post(body);
                    const savePost = await newPost.save();
                    return res.status(200).json({msg:"Post saved successfully"});
                } catch (error) {
                    return res.status(400).json({error:error.message});
                };
    
            }else{
                return res.status(400).json({msg:"Not authorized"});
            };

         

        default:
            return res.status(400).json({msg:"this method is not supported"})

    }


}