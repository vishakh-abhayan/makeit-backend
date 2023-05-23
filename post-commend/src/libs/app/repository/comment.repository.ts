import mongoose from 'mongoose'
import { CommentData } from '../../entites'
import {schemas} from '../database/mongodb'

const {Comment,Post}=schemas


export default {
    createComment:async (data:CommentData)=>{
        const comment =await  Comment.create(data)
        console.log(comment);
        
        if(comment){
            await Post.updateOne({_id:new mongoose.Types.ObjectId(comment.postId)},{
                $push:{
                    comments:comment._id
                }
            })
        }
        
        
        return comment
    },
    removeComment:async (commenId:string,postId:string)=>{
        const res=await Comment.deleteOne({$and:[{postId:postId},{_id:new mongoose.Types.ObjectId(commenId)}]})
        return res
    }
}