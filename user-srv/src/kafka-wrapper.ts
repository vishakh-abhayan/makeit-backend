import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId:"user-serv",
    brokers:[" 10.100.220.28:9092"]
})

export {
    kafka
}