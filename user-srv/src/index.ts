
import { app } from "./app";
import { dbConnect } from "./config/db";
import dotenv from "dotenv";
import { registerConsumer } from './events/consumer/index'
dotenv.config();

const start  = () =>{
    try{
        dbConnect()
    }catch(err){
        console.error(err);
        
    }
  
registerConsumer("REGISTER")


    app.listen(4000,()=>{
        console.log("server started at 4000");
    })
 
    





}
start()