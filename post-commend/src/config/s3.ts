import { S3Client ,PutObjectCommand,GetObjectCommand} from "@aws-sdk/client-s3";
import {getSignedUrl} from '@aws-sdk/s3-request-presigner'

import dotenv from "dotenv";

dotenv.config();

const access= process.env.S3_ACCESS_KEY!
const secret= process.env.S3_SECRET_KEY!
const region = process.env.S3_REGION


const client:any = new S3Client({
  credentials: ({
    accessKeyId: access,
    secretAccessKey: secret,
  }),
  region: region,
});
export const uploadFile = async (file: any) => {
  console.log(file)

  const command = new PutObjectCommand(file)
  try {
    const data = await client.send(command)
    // process data.
    return data
  } catch (error) {
    // error handling.
    return null
  }

};
export const getFile = async (getObjectParams:any)=>{
    const command:any = new GetObjectCommand(getObjectParams);
    const url = await getSignedUrl(client,command,{expiresIn:1000*60})
    return url
}