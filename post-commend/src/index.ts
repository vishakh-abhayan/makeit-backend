
import { app } from "./app";
import { dbConnect } from "./config/db";
import dotenv from "dotenv";
// import { registerConsumer } from './events/consumer/index'
dotenv.config();

const start  = () =>{
    try{
        dbConnect()
    }catch(err){
        console.error(err);
        
    }
  

    app.listen(5400,()=>{
        console.log("post server started at 5400");
    })
 
    





}
start()