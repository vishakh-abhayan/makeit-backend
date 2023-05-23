import {Request,Response} from 'express'

export default (dependencies:any)=>{

    const createPost = async (req:Request,res:Response)=>{
        
        const {useCase:{createPost_useCase}} = dependencies

        const postData = await createPost_useCase(dependencies).execute(req.body)
        res.send(postData)
    }
    return createPost
}