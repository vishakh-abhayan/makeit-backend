import express, { Application } from 'express'
import { configServer, startServer } from './framework/webserver/server'
import { route } from './framework/webserver/router/route'
import { dbConnect } from './framework/database/connection'
const PORT=4000
const app:Application = express()

configServer(app)
startServer(app,PORT)
dbConnect()
route(app)