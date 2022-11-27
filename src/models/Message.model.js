import { Schema, models, model } from "mongoose";

const messageSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name is requiered'],
        trim: true,
        maxlength: [60, 'name must be less than 60 characters']
    },
    contact: {
        type: String,
        default: undefined,
        trim: true,
        maxlength: [100, 'name must be less than 100 characters']
    },
    msg4me: {
        type: String,
        required: [true, 'add a text or a message'],
        trim: true,
        maxlength: [1000, 'this must be less than 250 characters']

    }

}, {
    timestamps: true,
    versionKey: false
})


export default models.Message || model('Message', messageSchema);