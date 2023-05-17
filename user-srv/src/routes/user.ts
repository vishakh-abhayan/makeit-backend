import express  from "express"
import { profileController } from "../libs/controllers";

export default (dependencies:any)=>{
    const router =  express.Router();

    const {getAllUsersController} = profileController(dependencies)

   router.get("/Allusers",getAllUsersController);

    return router
}