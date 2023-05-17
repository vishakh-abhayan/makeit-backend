import express from 'express'


const app = express()
const router = express.Router()
app.use('/api')
export {app}