import express from 'express'
import authRoutes from './auth'
export const routes = () => {
    const routes = express.Router()

    routes.use('/auth',authRoutes())
    return routes
}