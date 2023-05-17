import { userData,userProfile } from '../../entities'

export const createNewUser_useCase=(dependdecies:any)=>{
    const {repository:{userRepository}}=dependdecies
    if(!userRepository)throw new Error("The user repository shuld be dependecie");
    const exicutefunction=({firstName,lastName,email,phoneNumber}:userData)=>{
         const userdaata

    }
}