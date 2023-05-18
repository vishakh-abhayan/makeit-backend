import { EventEmitter } from "../../../events/emitter/emit"
import { login_produce } from "../../../events/produce"


export const login_UseCase = () => {
    const sendTopic='LOGIN'
    const resTopic='LOGIN:RES'
    const execute = (data:object)=>{
        login_produce(sendTopic,data)
        EventEmitter.on(resTopic,(data)=>{

            // need to validate user
            
            return data
        })
    }

    return {
        execute
    }
}  