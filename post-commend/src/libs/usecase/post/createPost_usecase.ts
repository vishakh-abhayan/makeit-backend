import { postData,Post } from "../../entites";
import {uploadFile} from '../../../config/s3'
import randomSring from 'randomstring'
export const createPost_useCase = (dependencies:any)=>{
    
const {repository:{postRepository}}=dependencies;
if(!postRepository){
    throw new Error("The post repository should be dependencies")
}
const execute=async (data:any,file:any)=>{
    const imageName = randomSring.generate()
    const params = {
        Bucket:process.env.S3_NAME,
        Key:imageName,
        Body:file.data,
        ContentType:file.mimetype
    }
    const upload =await  uploadFile(params)
    console.log(upload);
    
    const postDetails = {
        userId:data.userId,
        data:data.data,
        image:imageName,
        createdAt:new Date(),
        comments:[],
        likes:0
    }
    const postdata = new Post(postDetails)
    return postRepository.createPost(postdata)
    
} 
return {execute}

}