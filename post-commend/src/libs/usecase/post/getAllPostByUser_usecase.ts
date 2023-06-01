import { getFile } from "../../../config/s3"


export const getAllPostByUser_useCase = (dependencies:any)=>{
    const{repository:{postRepository}}=dependencies
    const execute = async (userId:string)=>{
        const posts =await  postRepository.getAllpostsByUser(userId)
        for(const post of posts){
            const getObjectParams = {
                Bucket:process.env.S3_NAME,
                Key:post.image
            }
            const url = await getFile(getObjectParams)
            post.image = url
        }
        return posts
    }
    return {
        execute
    }
}