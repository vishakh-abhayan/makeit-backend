import { Kafka } from "kafkajs";

export const kafka = new Kafka({
    clientId:"user-srv",
    brokers:['10.98.123.90:9092']
})