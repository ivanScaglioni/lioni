import { dbConnect } from "utils/mongoose.js";
dbConnect()

import Project from "#models/Project.model.js";





export default async function handler(req,res){
    
    const {method, body} = req;

    switch(method){

        case "GET":

            const proj = await Project.find().sort({'updatedAt': -1});
            return res.status(200).json(proj);

        case "POST":

            try {

                const newProj = new Project(body);
                const saveProj = await newProj.save();
                return res.status(201);
            } catch (error) {
               
                return res.status(400);
            }

        
        default:
            return res.status(400).json({msg:"this method is not supported"})

    }


}