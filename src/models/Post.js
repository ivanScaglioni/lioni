import { Schema, models, model } from "mongoose";

const postSchema =  new Schema({
    title:{
        type: String,
        required: [true, 'Title is requiered'],
        unique:true,
        trim:true,
        maxlength: [40, 'Tile must be less than 40 characters']
    },
    subtitle:{
        type:String,
        trim:true,
        maxlength: [60, 'subtitle must be less than 60 characters']
    },
    body:{
        type:String,
        required:[true,'add a text or a body'],
        trim:true,
        maxlength: [500, 'this must be less than 500 characters']
    },
    sources:{
        type:[String],
        default: '.',
        trim:true,
    }
    
}, {
    timestamps:true,
    versionKey:false
})


export default models.Post || model('Post', postSchema);