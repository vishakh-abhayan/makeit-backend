import express from 'express'
import postRoute from './post/post'
import commentRoute from './comment/comment'
export const routes = (dependencies:any)=>{
    const routes = express.Router()
    
    routes.use('/post',postRoute(dependencies))
    routes.use('/comment',commentRoute(dependencies))
    return routes
}
