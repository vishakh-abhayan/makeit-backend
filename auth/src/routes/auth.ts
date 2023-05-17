import express from 'express'
import { loginController } from '../libs/controller'

export default ()=>{
    const router = express.Router()

    router.post('/login',loginController().login)

    return router
}    