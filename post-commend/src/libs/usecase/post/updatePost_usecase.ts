import randomSring from 'randomstring'
import { uploadFile } from '../../../config/s3'


export const updatePost_useCase = (dependencies:any)=>{
    const{repository:{postRepository}}=dependencies
    if(!postRepository) throw new Error("The post repository should be dependencies")

    const execute=async (details:any,file:any)=>{
        const {data,postId} = details
        if(file){
            const post=await postRepository.getPostById(postId)
            if(file.name !== post.image){
                const imageName = randomSring.generate()
                const params = {
                    Bucket:process.env.S3_NAME,
                    Key:imageName,
                    Body:file.data,
                    ContentType:file.mimetype
                }
                const upload =await  uploadFile(params)
                return postRepository.updatePost(postId,data,imageName)
            }
            return postRepository.updatePost(postId,data,post.image)
        }


    }
    return {
        execute
    }
}