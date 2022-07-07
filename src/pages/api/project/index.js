import { dbConnect } from "utils/mongoose.js";
dbConnect()

import Project from "#models/Project.js";





export default async function handler(req,res){

    const {method, body} = req;
    switch(method){
        case "GET":
            const proj = await Project.find();
            console.log(proj);
            return res.status(200).json("proyectos");
        

        
        default:
            return res.status(400).json({msg:"this method is not supported"})

    }


}