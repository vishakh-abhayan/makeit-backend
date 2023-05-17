import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId:"auth",
    brokers:["localhost:9092"]
})

export {
    kafka
}