import mongoose from 'mongoose'
import {schemas} from '../database/mongodb'

const {Post} = schemas

export default {
    createPost:async(post:any)=>{
        const postData={
            userId:post.userId,
            data:post.data,
            image:post.image,
            createdAt: new Date(),
            comments:post.comments
        }
        const postdata = Post.create(postData)
        return postdata
    },
    updatePost:async(postId:string,fieldName:string,newValue:string)=>{
        const updateData: any = { $set: {} };
        updateData.$set[fieldName] = newValue;
        return Post.updateOne({_id:new mongoose.Types.ObjectId(postId)},updateData).then((res)=>{
            return res
        })
        .catch((err)=>{
            return err
        })
    },
    removePost:async(postId:string)=>{
        return Post.deleteOne({_id:new mongoose.Types.ObjectId(postId)}).then((res)=>{
            return res
        }).catch((err)=>{
            return err
        })
    }
}