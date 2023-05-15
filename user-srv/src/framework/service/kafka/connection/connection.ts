import { Kafka } from "kafkajs";

export const kafka = new Kafka({
    clientId:"user-srv",
    brokers:['10.108.159.227:9092']
})


