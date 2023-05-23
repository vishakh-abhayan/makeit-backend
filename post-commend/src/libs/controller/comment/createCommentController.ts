import { Request, Response } from "express";

export default (dependencies:any)=>{
    const {useCase:{createComment_useCase}}=dependencies
    const createComment =async (req:Request,res:Response)=>{

        const commentData = await createComment_useCase(dependencies).execute(req.body)
        res.send(commentData)

    }
    return createComment
}