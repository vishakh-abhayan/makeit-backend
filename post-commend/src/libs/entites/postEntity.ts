export interface postData{
    userId:string,
    data:string,
    image:string,
    createdAt:Date,
    comments:Array<string>
}


export class Post{
    userId:string;
    data:string;
    image:string;
    createdAt:Date;
    comments:Array<string>
    constructor({userId,data,image,createdAt,comments}:postData){
        this.userId=userId,
        this.data=data,
        this.image=image,
        this.createdAt=createdAt,
        this.comments=comments
    }
}