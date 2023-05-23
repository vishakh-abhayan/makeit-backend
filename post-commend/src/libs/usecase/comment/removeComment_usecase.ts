

export const removeComment_useCase = (dependencies:any) =>{

    const {repository:{commentRepository}}=dependencies


    const execute = (commenetId:string,postId:string) => {
        return commentRepository.removeComment(commenetId,postId)
    }
    return {execute}
}