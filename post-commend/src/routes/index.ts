import express from 'express'
import postRoute from './post/post'

export const routes = (dependencies:any)=>{
    const routes = express.Router()
    
    routes.use('/post',postRoute(dependencies))
    return routes
}
