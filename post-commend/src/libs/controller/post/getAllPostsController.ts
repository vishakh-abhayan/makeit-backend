import { Request,Response } from "express";

export default (dependencies:any)=>{
    const{useCase:{getAllPosts_useCase}}=dependencies
    const getAllPosts =async(req:Request,res:Response)=>{
        const allPosts = await getAllPosts_useCase(dependencies).execute()
        res.send(allPosts)
    }
    return getAllPosts
}