import { Kafka } from "kafkajs";

export const kafka = new Kafka({
    clientId:"user-srv",
    brokers:['10.105.66.104:9092']
}) 