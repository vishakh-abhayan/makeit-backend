import { EventEmitter } from "../../../events/emitter/emit"
import { register_produce } from "../../../events/produce"



export const register_useCase = () => {
    const sendTopic='REGISTER'
    const resTopic='REGISTER:RES'
    const execute = (data:object) =>{
        register_produce(sendTopic,data)
        EventEmitter.on(resTopic,(data)=>{


            return data
        })
    }

    return {
        execute
    }

}