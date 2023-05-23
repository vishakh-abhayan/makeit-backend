

export const changeLike_useCase = (dependencies:any) => {
    const {repository:{postRepository}}=dependencies
    const execute =async (data:any) => {
        const {count,currLike,postId}=data
        const likeRes=await postRepository.changeLike(count,currLike,postId)
        return likeRes
    }
    return {execute}
}