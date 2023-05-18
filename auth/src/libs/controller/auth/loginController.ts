import { Request,Response } from "express";
import { login_UseCase } from "../../usecase";
import joi from 'joi'

export default ()=>{
    const payLoadSchema=joi.object({
        email:joi.string().email().required(),
        password:joi.string().required()
    })
    const login =async (req:Request,res:Response) => {
        
        const {error,value} = payLoadSchema.validate(req.body)
        console.log(typeof value);
        if(!error){
            const response = login_UseCase().execute(value)
            res.send(response)
        }else{
            res.status(400).send({message:"Somthing went wrong with input details"})
        }
    }
    return {
        login
    }

}  