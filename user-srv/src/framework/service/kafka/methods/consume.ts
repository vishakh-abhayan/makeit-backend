import { kafka } from "../connection/connection";
import { Emit } from "../../dataEmitter/emitter";
class Consumer {
  consumer;
  constructor() {
    this.consumer = kafka.consumer({ groupId: "user" });
    this.consumer.connect();
  }
  async getMessage(topic: string) {
    await this.consumer.subscribe({ topic });
    await this.consumer.run({
      eachMessage: async ({ message }) => {
        if (message.value !== null) {
          try {
            const data = JSON.parse(message.value.toString());
            Emit.emit(data);
          } catch (e) {
            throw new Error("kafka consume error");
          }
        }
      },
    });
  }
}
export {
    Consumer
}
