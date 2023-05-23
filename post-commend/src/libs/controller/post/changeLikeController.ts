import { Request,Response } from "express";

export default (dependencies:any)=>{
    const {useCase:{changeLike_useCase}}=dependencies
    const changeLike =async (req:Request,res:Response)=>{
        const likeRes = await changeLike_useCase(dependencies).execute(req.body)
        res.send(likeRes)
    }
    return changeLike
}