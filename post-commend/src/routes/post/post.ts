import {postController} from "../../libs/controller";
import express from 'express'
export default (dependencies:any)=>{
    const router = express.Router();
    const {createPost,updatePost,removePost} = postController(dependencies)

    router.post("/create",createPost)
    router.patch("/update",updatePost)
    router.delete('/remove/:id',removePost)
    return router
} 