import { Message } from 'kafkajs'
import {kafka} from '../connection/connection'
const producer = kafka.producer()

export const sendMessage = async (data:Message,topic:string) => {
    await producer.connect()
    await producer.send({
        topic,
        messages:[{
            value:JSON.stringify(data)
        }]
    })
    console.log(data," published....on>> ",topic);
    await producer.disconnect()
}