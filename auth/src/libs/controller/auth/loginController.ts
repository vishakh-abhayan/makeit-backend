import { Request,Response } from "express";
import { login_UseCase } from "../../usecase";


export default ()=>{

    const login =async (req:Request,res:Response) => {
        console.log("loginn")
        // const {email,password} = req.body
        // const data =await login_UseCase().execute(email,password)
        res.send("response")
    }
    return {
        login
    }

}