import express from 'express'
import { loginController } from '../libs/controller'
import registerController from '../libs/controller/auth/registerController'

export default ()=>{
    const router = express.Router()

    router.post('/login',loginController().login)
    router.post('/register',registerController().register)

    return router
}    