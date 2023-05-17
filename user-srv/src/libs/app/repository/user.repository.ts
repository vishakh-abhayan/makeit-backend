import mongoose,{Types} from 'mongoose'
import { schems } from '../dataBase/mongodb'
const {user} = schems
 
export default {
    createUser:async(User:any)=>{
        const userData = {
            firstName : User.firstName,
            lastName:User.lastName,
            email:User.email,
            phoneNumber:User.phoneNumber
        }
        const userdata = user.create(userData)
        return userdata
    },
   
    getAllUser:async()=>{
           const allUserdataObject = await user.find({})
           console.log(allUserdataObject,'alluserdataObject');
           return allUserdataObject
    }

       
}