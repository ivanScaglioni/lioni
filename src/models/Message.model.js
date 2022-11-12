import { Schema, models, model } from "mongoose";

const messageSchema =  new Schema({
    name:{
        type: String,
        required: [true, 'name is requiered'],
        trim:true,
        maxlength: [16, 'name must be less than 16 characters']
    },
    contact:{
        type: String,
        default: undefined,
        trim:true,
        maxlength: [30, 'name must be less than 30 characters']
    },
    msg4me:{
        type:String,
        required:[true,'add a text or a message'],
        trim:true,
        maxlength: [1000, 'this must be less than 250 characters']
    
    }
    
}, {
    timestamps:true,
    versionKey:false
})


export default models.Message || model('Message', messageSchema);