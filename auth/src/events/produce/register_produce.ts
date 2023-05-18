import { sendMessage } from "../common/produce"

export default (topic:string,data:any)=>{
    sendMessage(topic,data)
}       