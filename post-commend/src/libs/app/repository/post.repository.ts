import mongoose from 'mongoose'
import {schemas} from '../database/mongodb'
import { postData } from '../../entites'

const {Post} = schemas

export default {
    createPost:async(post:any)=>{
        const postData:postData={
            userId:post.userId,
            data:post.data,
            image:post.image,
            likes:post.likes,
            createdAt: post.createdAt,
            comments:post.comments
        }
        const postdata =await Post.create(postData)
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
    },
    getAllpostsByUser:async(userId:string)=>{
        const posts = await Post.aggregate([
            {
                $match:{
                    userId:userId
                }
            },
            {
                $lookup:{
                    from:"comments",
                    foreignField:"_id",
                    localField:"comments",
                    as:"comments"
                }
            }
        ])
        if(posts.length !== 0 ){
            return posts
        }
        return null
    },
    getPostById:async (postId:string)=>{
        const post = await Post.aggregate([
            {
                $match:{
                    _id:new mongoose.Types.ObjectId(postId)
                }
            },
            {
                $lookup:{
                    from:"comments",
                    foreignField:"_id",
                    localField:"comments",
                    as:"comments"
                }
            }
        ])
        console.log(post);
        
        if(post.length === 0){  
            return null
        }
        return post[0]
    },
    getAllPosts:async ()=>{
        const allPosts=await Post.find()
        if(allPosts.length !== 0) return allPosts
        return null
        
    },
    changeLike:async (count:any,currLike:number,postId:string)=>{
        let res=null
        if(count == -1 && currLike > 0){
          res =  await Post.updateOne({_id:new mongoose.Types.ObjectId(postId)},{
                $inc:{
                    likes:count
                }
            })
        }else if(count == 1){
            res = await Post.updateOne({_id: new mongoose.Types.ObjectId(postId)},{
                $inc:{
                    likes:count
                }
            })
        }
        return res
    }
}