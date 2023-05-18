import { Request,Response } from "express";
import { register_useCase } from "../../usecase/auth/register.useCase";

export default ()=>{
    

    const register = async (req:Request,res:Response)=>{

        // need to validate request

        // register_useCase().execute()  pass datas
         
    }
    return {
         register
    }
}