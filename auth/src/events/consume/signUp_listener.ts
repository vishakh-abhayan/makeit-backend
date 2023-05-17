import { ConsumerMessage } from "../common/consumer";

export default (topic:string) => {
    const signup = new ConsumerMessage()
    signup.getMessage(topic)   
}