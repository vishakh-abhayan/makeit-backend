import { Application } from "express";


export const route = (app:Application) => {

app.route('/api/test/okone').get((req,res)=>{
    console.log("test api worked")
    res.send("test working sample")
})  
app.route('/api/test/newone').get((req,res)=>{
    console.log("working two sample");
    res.send("test working")
})
app.route('/api/test/second').get((req,res)=>{
    console.log("working second");
    res.send("test 3")
})

} 