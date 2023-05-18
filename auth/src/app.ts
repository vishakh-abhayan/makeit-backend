import express from 'express'
import { routes } from './routes'


const app = express()
const router = express.Router()
app.use(express.json())
app.use('/api',routes())

export {app}