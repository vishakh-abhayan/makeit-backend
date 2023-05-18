import express from "express";
import userRoutes from './user'

export const routes  =(dependencies:any)=>{
    const routes = express.Router()
    
    routes.use('/user',userRoutes(dependencies))
    return routes
}