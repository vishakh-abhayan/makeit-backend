
import { app } from "./app";
import { dbConnect } from "./config/db";
import { user } from '../src/libs/app/dataBase/mongodb/Schemas/user.schema'
import dotenv from "dotenv";

dotenv.config();

const start  = () =>{
    try{
        dbConnect()
    }catch(err){
        console.error(err);
        
    }
   

    app.listen(3000,()=>{
        console.log("db connected to");
    })
   
}

start()