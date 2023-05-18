import dependeencies from "../../config/depentencies";
import { ConsumerMessage } from "../common/subscriber";
import { EventEmitter } from "../emitter/emitter";
import { user_response_producer } from "../producer";




export default async (topic:string) => {
    const register = new ConsumerMessage()
       register.getMessage(topic)
       EventEmitter.on(topic,(data)=>{
              const create = async (dependencies:any)=>{
                const {useCase:{createNewUser_useCase}} = dependencies
              const response = await createNewUser_useCase(dependencies).exicutefunction(data);
                               user_response_producer('user-response',response)
              }
             if(data){
                 create(dependeencies)
             }
           
        })
}