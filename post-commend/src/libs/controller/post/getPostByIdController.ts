import { Request,Response } from "express";

export default (dependencies:any)=>{
    const {useCase:{getPostById_useCase}}=dependencies
    const getPost =async (req:Request,res:Response) =>{
        const postId=req.params.postId
        console.log("postId",postId);
        
        const post =await getPostById_useCase(dependencies).execute(postId)
        res.send(post)

    }
    return getPost
}