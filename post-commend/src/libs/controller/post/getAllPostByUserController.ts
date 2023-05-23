import { Request, Response } from "express"
export default (dependencies:any)=>{
    const{useCase:{getAllPostByUser_useCase}}=dependencies
    const getAllPosts=async (req:Request,res:Response)=>{
        const userId=req.params.userId
        console.log(userId);
        
        const posts = await getAllPostByUser_useCase(dependencies).execute(userId)
        res.send(posts)
    }
    return  getAllPosts
}