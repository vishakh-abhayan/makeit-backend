import express  from "express"
import { profileController } from "../libs/controllers";

export default (dependencies:any)=>{
    const router =  express.Router();

    const {getAllUsersController,getUserById} = profileController(dependencies)

   router.get("/Allusers",getAllUsersController);
   router.get("/:userId",getUserById)

    return router
}