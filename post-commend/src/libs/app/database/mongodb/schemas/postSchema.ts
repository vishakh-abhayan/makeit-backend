import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    userId: String,
    data:String,
    image:String,
    createdAt:Date,
    comments:Array<String>
})

const Post = mongoose.model('posts',postSchema)

export {
    Post
}