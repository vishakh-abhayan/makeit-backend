import { getFile } from "../../../config/s3"


export const getPostById_useCase = (dependencies:any) => {
    const {repository:{postRepository}}=dependencies
    const execute=async(postId:string)=>{
        const post =await postRepository.getPostById(postId)

        if(post){

            const getObjectParams = {
                Bucket:process.env.S3_NAME,
                Key:post.image
            }
            const url = await getFile(getObjectParams)
            post.image=url
            return post
        }
    }
    return {execute}
}