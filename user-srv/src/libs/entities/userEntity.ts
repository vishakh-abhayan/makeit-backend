export interface userData {
    firstName : string,
    lastName: string,
    email:string,
    phoneNumber:number,
}

export class userProfile{

    
    firstName : string;
    lastName: string
    email : string
    phoneNumber:number


    constructor({firstName,lastName,email,phoneNumber}:userData){
        this.firstName = firstName
        this.lastName  = lastName,
        this.email = email,
        this.phoneNumber = phoneNumber

    }
}
