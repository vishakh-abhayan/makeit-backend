import express from "express";
import { json } from "body-parser";
import depentencies from "./config/depentencies";
import { routes } from "./routes";

const app=express();
const router = express.Router();

// app.set()
app.use(json());

app.use('/api/v1',routes(depentencies))

// app.all('*',async(req,res)=>{
//      throw new Error("not found")
// })

export { app }