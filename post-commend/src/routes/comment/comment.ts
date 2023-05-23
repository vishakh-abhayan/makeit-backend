import express from 'express'
import { commentController } from '../../libs/controller'

export default (dependencies:any)=>{
    const router=express.Router()
    const {createComment,removeComment} = commentController(dependencies)
    router.post('/create',createComment)
    router.delete('/remove',removeComment)
    return router
}