import { Kafka } from "kafkajs";

export const kafka = new Kafka({
    clientId:"user-srv",
    brokers:['10.103.195.41:9092']
})
 