
import { dbConnect } from "utils/mongoose";
import Project from "models/Project";
import {isValidObjectId} from "mongoose"

dbConnect();

export default async (req, res) => {

    const{method, body, query:{id}} = req;

    const isId = isValidObjectId(id);
    if(!isId)return res.status(400).json("no valid id received");

    switch (method) {

        case "GET":
            const Project = await Project.findById(id);
            if(!Project) return res.status(404).json({msg:"Project not found"});
            return res.status(200).json(Project);


           
           
        case "PUT":
            const upProject =  await Project.findByIdAndUpdate(id,body,{
                new : true,
            });
            if(!upProject) return res.status(404).json({msg:"Project not found"});
            return res.status(200).json(upProject);



        case "DELETE":
            const deleteProject = await Project.findByIdAndDelete(id);
            if(!deleteProject) return res.status(404).json({msg:"Project not found"})
            return res.status(204).json();
        
        
        
            default:
            return res.status(400).json({msg:"this method is not supported"})
    }


};