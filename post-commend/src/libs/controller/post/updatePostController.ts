import { Request, Response } from "express";

export default (dependencies:any)=>{
    const {useCase:{updatePost_useCase}}=dependencies
    const updatePost = async (req:Request,res:Response)=>{

        const updateData = await updatePost_useCase(dependencies).execute(req.body,req.files)
        console.log(updateData);
        
        res.send(updateData)
    }
    return updatePost
}