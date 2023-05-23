

export const removePost_useCase = (dependencies:any) =>{
    const {repository:{postRepository}}=dependencies
    if(!postRepository) throw new Error("The post repository should be dependencies")
    const execute=(postId:string)=>{
        return postRepository.removePost(postId)
    }
    return {execute}
}