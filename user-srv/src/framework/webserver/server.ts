import express, { Application } from 'express'
import cors from 'cors'

export const configServer = (app:Application) => {
    app.use(express.json())
    app.use(cors())

}
export const startServer = (app:Application,PORT:Number) => {
    app.listen(PORT,()=>console.log("user service listening on",PORT))
}