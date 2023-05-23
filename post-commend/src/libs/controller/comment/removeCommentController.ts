import { Request, Response } from "express";

export default (dependencies:any)=>{
    const {useCase:{removeComment_useCase}}=dependencies
    const removeComment = (req:Request,res:Response)=>{
        const {commenetId,postId}=req.body
        const response = removeComment_useCase(dependencies).execute(commenetId,postId)
        res.send(response)

    }
    return removeComment

}