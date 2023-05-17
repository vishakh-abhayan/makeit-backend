import mongoose from "mongoose";

const usrSchema = new mongoose.Schema({
    firstName : String,
    lastName: String,
    email:String,
    phoneNumber:Number,
},{
    versionKey:false
})


const user = mongoose.model("Users",usrSchema)


export {
    user
}