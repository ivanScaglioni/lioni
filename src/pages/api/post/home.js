import { dbConnect } from "utils/mongoose.js";
dbConnect();
import Post from "#models/Post.model.js";





export default async function handler(req, res) {

    const { method } = req;
    switch (method) {
        case "GET":

            const posts = await Post.find().sort({ 'createdAt': -1 }).limit(4);
            return res.status(200).json(posts);

        default:
            return res.status(400).json({ msg: "this method is not supported" })

    }


}