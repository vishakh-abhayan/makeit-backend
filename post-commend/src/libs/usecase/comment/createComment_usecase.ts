import { Comment ,CommentData} from "../../entites"

export const createComment_useCase = (dependencies:any) =>{
    const {repository:{commentRepository}}=dependencies
    const execute = (datas:any)=>{
        const commentData :CommentData= {
            postId:datas.postId,
            userId:datas.userId,
            data:datas.data,
            createdAt:new Date()
        }
        const comment = new Comment({...commentData})
        return commentRepository.createComment(comment)

    }
    return {execute}
}