import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId:"auth",
    brokers:["10.102.124.221:9092"]
})

export {
    kafka
} 