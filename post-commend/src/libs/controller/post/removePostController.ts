import { Request, Response } from "express";

export default (dependencies:any)=>{
    const{useCase:{removePost_useCase}}=dependencies
    const removePost =async (req:Request,res:Response)=>{
        const postId=req.params.id
        console.log(postId)

        const deletePost =await removePost_useCase(dependencies).execute(postId)
        res.send(deletePost)
        
    }
    return removePost
}