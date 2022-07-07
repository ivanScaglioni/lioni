import { Schema, models, model } from "mongoose";

const projectSchema =  new Schema({
    title:{
        type: String,
        required: [true, 'Title is requiered'],
        unique:true,
        trim:true,
        maxlength: [40, 'Tile must be less than 40 characters']
    },
    description:{
        type:String,
        required: [true, 'some description'],
        trim:true,
        maxlength: [250, 'Tile must be less than 250 characters']
    },
    link:{
        type:[String],
        default: undefined,
        trim:true,
    }

    
}, {
    timestamps:true,
    versionKey:false
})


export default models.Project || model('Project', projectSchema);