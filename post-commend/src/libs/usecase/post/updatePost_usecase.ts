

export const updatePost_useCase = (dependencies:any)=>{
    const{repository:{postRepository}}=dependencies
    if(!postRepository) throw new Error("The post repository should be dependencies")

    const execute=async (post:any)=>{
        const {field,data,postId} = post

        return postRepository.updatePost(postId,field,data)

    }
    return {
        execute
    }
}