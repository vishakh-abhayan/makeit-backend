import { kafka } from "../../kafka-wrapper";
import { EventEmitter } from "../emitter/emit";

class ConsumerMessage{
    consumer;
    constructor(){
        this.consumer = kafka.consumer({groupId:"auth"})
        this.consumer.connect()
    }
    async getMessage(topic:string){
        await this.consumer.subscribe({topic})
        console.log(topic,"subscribed")
        await this.consumer.run({
            eachMessage:async ({message}) => {
                if(message.value !== null){
                    try{
                        const data = JSON.parse(message.value.toString())
                        EventEmitter.emit(topic,data)
                    }
                    catch(e){
                        console.log("kafka msg err");
                        
                    }
                }
            }
        })
    }
}

export {
    ConsumerMessage
}