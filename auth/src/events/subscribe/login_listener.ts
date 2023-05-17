import { ConsumerMessage } from "../common/subscribe";

export default (topic:string) => {
    const login = new ConsumerMessage()
    login.getMessage(topic)   
}