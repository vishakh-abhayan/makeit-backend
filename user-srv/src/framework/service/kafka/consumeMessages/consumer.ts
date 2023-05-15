import { Consumer } from "../methods/consume";

export const consumeMessage = () => {
    const consume = new Consumer()
    consume.getMessage('test')
}