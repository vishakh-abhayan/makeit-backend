import { Request,Response } from "express"




export default (dependencies:any)=>{

    const {userCase:{getAllUser_useCase}} = dependencies
    const getAllUsers = async (req:Request,res:Response)=>{
           try{
            const userData = await getAllUser_useCase(dependencies).executefunction();
            if(!userData) throw new Error('no such profile found')
            res.json(userData)
           }catch(error:any){
             throw new Error(error)
           }
    }
    return getAllUsers
}