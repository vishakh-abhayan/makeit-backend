import mongoose from "mongoose";

const commentSchema=new mongoose.Schema({
    postId:String,
    userId:String,
    data:String,
    createdAt:Date
},{versionKey:false})

const Comment = mongoose.model('comments',commentSchema)

export {
    Comment
}