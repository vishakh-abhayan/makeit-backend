import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId:"auth",
    brokers:["10.104.226.21:9092"]
})

export {
    kafka
}