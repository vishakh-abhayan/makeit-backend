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
    const post = {
        userId:userId,
        data:data,
        image:image,
        createdAt:new Date(),
        comments:[]
    }
    const postdata = new Post({...post})
    return postRepository.createPost(postdata)
    
}
return {execute}

}