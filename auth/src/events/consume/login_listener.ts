import { ConsumerMessage } from "../common/consumer";

export default (topic:string) => {
    const login = new ConsumerMessage()
    login.getMessage(topic)   
}