import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
export const dbConnect = async () => {
    try{
        await mongoose.connect(`mongodb+srv://harikrishnanpnr001:${process.env.MONGO_PASS}@cluster0.wcvrk4h.mongodb.net/`)
        .then(()=>console.log("DB connected"))
        .catch((err)=>console.log("db connection error",err))
    }
    catch(err){
        throw new Error('mongodb connection error')
    }
}