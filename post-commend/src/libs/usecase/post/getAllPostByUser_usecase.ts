

export const getAllPostByUser_useCase = (dependencies:any)=>{
    const{repository:{postRepository}}=dependencies
    const execute =(userId:string)=>{
        return postRepository.getAllpostsByUser(userId)
    }
    return {
        execute
    }
}