import { Post } from "../database/mongodb/schemas/postSchema"

export default {
    createPost:async(Post:any)=>{
        const postData={
            userId:Post.userId,
            data:Post.data,
            image:Post.image,
            createdAt: new Date(),
            comments:[]
        }
    }
    
}