import { deleteFile } from "../../../config/s3"


export const removePost_useCase = (dependencies:any) =>{
    const {repository:{postRepository}}=dependencies
    if(!postRepository) throw new Error("The post repository should be dependencies")
    const execute=async(postId:string)=>{
        const post = await postRepository.getPostById(postId)
        const params = {
            Bucket:process.env.S3_NAME,
            Key:post.image,
        }
        const removePostImage =await deleteFile(params)
        if(removePostImage){
            return postRepository.removePost(postId)
        }
    }
    return {execute}
}