import { Application } from "express";


export const route = (app:Application) => {

app.route('/test').get((req,res)=>{
    console.log("test api worked")
    res.send("test working")
})  


}