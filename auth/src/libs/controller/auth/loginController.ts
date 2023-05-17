import { Request,Response } from "express";
import { login_UseCase } from "../../usecase";


export default ()=>{

    const login = (req:Request,res:Response) => {
        const {email,password} = req.body
        login_UseCase().execute(email,password)
    }
    return {
        login
    }

}