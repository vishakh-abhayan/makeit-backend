
import express from "express";
import { json } from "body-parser";
import depentencies from "./config/dependencies";
import { routes } from "./routes";
import fileUpload from 'express-fileupload'
import cors from 'cors'
const app=express();
const router = express.Router();

// app.set()
app.use(cors())
app.use(json());
app.use(fileUpload())
app.use('/api',routes(depentencies))

// app.all('*',async(req,res)=>{
//      throw new Error("not found")
// })
export { app } 

 