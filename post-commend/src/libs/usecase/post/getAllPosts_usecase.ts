

export const getAllPosts_useCase = (dependencies:any) => {
    const {repository:{postRepository}}=dependencies
    const execute =async () => {
        const allPosts = await postRepository.getAllPosts()
        return allPosts
    }
    return {execute}
}