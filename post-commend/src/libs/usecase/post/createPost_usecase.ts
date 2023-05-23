import { postData,Post } from "../../entites";
export const createPost_useCase = (dependencies:any)=>{
    
const {repository:{postRepository}}=dependencies;
if(!postRepository){
    throw new Error("The post repository should be dependencies")
}
const execute=async ({
    userId,
    data,
    image
}:postData)=>{
    const postDetails = {
        userId:userId,
        data:data,
        image:image,
        createdAt:new Date(),
        comments:[],
        likes:0
    }
    const postdata = new Post(postDetails)
    console.log(postdata)
    return postRepository.createPost(postdata)
    
}
return {execute}

}