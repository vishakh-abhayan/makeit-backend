import { getFile } from "../../../config/s3"


export const getAllPosts_useCase = (dependencies:any) => {
    const {repository:{postRepository}}=dependencies
    const execute =async () => {
        const allPosts = await postRepository.getAllPosts()
        for(const post of allPosts){
        const getObjectParams = {
            Bucket:process.env.S3_NAME,
            Key:post.image
        }
        const url = await getFile(getObjectParams)
        post.image = url
    }
        return allPosts
    }
    return {execute}
}