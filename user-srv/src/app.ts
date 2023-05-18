import express, { Application } from 'express'
import { configServer, startServer } from './framework/webserver/server'
import { route } from './framework/webserver/router/route'
import { dbConnect } from './framework/database/connection'
import { consumeMessage } from './framework/service/kafka/consumeMessages/consumer'
const PORT=4000
const app:Application = express()

<<<<<<< Updated upstream
configServer(app)
startServer(app,PORT)
dbConnect()
consumeMessage()
route(app)  
=======
const app=express();
const router = express.Router();

// app.set()
app.use(json());

app.use('/api',routes(depentencies))

// app.all('*',async(req,res)=>{
//      throw new Error("not found")
// })
  
export { app } 
>>>>>>> Stashed changes
