import { app } from "./app";
import listeners from "./events/subscribe/index";

const {loginListener,signUpListener} = listeners

const start = () => {


    loginListener("login")
    signUpListener("signup")
    app.listen(4000,()=>{
        console.log("auth server started")
    })
}

start()