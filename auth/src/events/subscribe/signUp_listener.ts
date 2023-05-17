import { ConsumerMessage } from "../common/subscribe";

export default (topic:string) => {
    const signup = new ConsumerMessage()
    signup.getMessage(topic)   
}