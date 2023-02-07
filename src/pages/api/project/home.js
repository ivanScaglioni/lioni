import { dbConnect } from "utils/mongoose.js";
dbConnect()

import Project from "#models/Project.model.js";





export default async function handler(req,res){
    
    const {method} = req;
    
    switch(method){

        case "GET":

            const proj = await Project.find().sort({ 'createdAt': -1 }).limit(4);
            return res.status(200).json(proj);

    
        
        default:
            return res.status(400).json({msg:"this method is not supported"})

    }


}