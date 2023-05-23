

export const getPostById_useCase = (dependencies:any) => {
    const {repository:{postRepository}}=dependencies
    const execute=(postId:string)=>{
        return postRepository.getPostById(postId)
    }
    return {execute}
}