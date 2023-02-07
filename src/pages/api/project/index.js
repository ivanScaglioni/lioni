import { dbConnect } from "utils/mongoose.js";
dbConnect()

import Project from "#models/Project.model.js";
import { verifyAuth } from "dto/verifyAuth";




export default async function handler(req,res){
    
    const {method, body} = req;

    const isLogin = await verifyAuth(req.headers.cookie);

    switch(method){

        case "GET":

            const proj = await Project.find().sort({'createdAt': -1});
            return res.status(200).json(proj);

        case "POST":
            if(isLogin){
                try {

                    const newProj = new Project(body);
                    const saveProj = await newProj.save();
                    return res.status(200).json({msg:"Porject saved successfully"});
                } catch (error) {
                   
                    return res.status(400);
                }
            }else{
                return res.status(404).json({msg:"Not authorized"});
            };


        
        default:
            return res.status(400).json({msg:"this method is not supported"})

    }


}