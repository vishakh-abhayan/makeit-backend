import { app } from "./app";
import listeners from "./events/consume/index";

const {loginListener,signUpListener} = listeners

const start = () => {


    loginListener("login")
    signUpListener("signup")
    app.listen(4100,()=>{
        console.log("auth server started")
    })
}

start()