import { EventEmitter } from "../../../events/emitter/emit"
import { login_produce } from "../../../events/produce"


export const login_UseCase = () => {
    const topic='login'
    const execute = (email:string,password:string)=>{
        const data = {email,password}
        login_produce(topic,data)
        EventEmitter.on(topic,(data)=>{
            return data
        })
    }

    return {
        execute
    }
} 