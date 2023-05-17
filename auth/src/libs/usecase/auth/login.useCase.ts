import { login_produce } from "../../../events/produce"


export const login_UseCase = () => {

    const execute = (email:string,password:string)=>{
        const data = {email,password}
        login_produce("login",data)
    }

    return {
        execute
    }
}