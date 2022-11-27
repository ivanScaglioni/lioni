import { Schema, models, model } from "mongoose";

const postSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is requiered'],
        unique: true,
        trim: true,
        maxlength: [100, 'Tile must be less than 100 characters']
    },
    description: {
        type: String,
        required: [true, 'some description'],
        trim: true,
        maxlength: [500, 'Tile must be less than 500 characters']

    },
    image: {
        type: String,
        default: undefined,
        trim: true
    },
    expand: {
        type: String,
        required: [true, 'add a text or a body'],
        trim: true,
        maxlength: [2000, 'this must be less than 2000 characters']
    },
    github: {
        type: String,
        default: undefined,
        trim: true,
    },
    website: {
        type: String,
        default: undefined,
        trim: true,
    }


}, {
    timestamps: true,
    versionKey: false
})


export default models.Post || model('Post', postSchema);