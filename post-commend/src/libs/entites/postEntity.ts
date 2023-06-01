export interface postData{
    userId:string,
    data:string,
    image:string,
    createdAt:Date,
    comments:Array<string>,
    likes:number,
    files?:object
}


export class Post{
    userId:string;
    data:string;
    image:string;
    createdAt:Date;
    comments:Array<string>;
    likes:number
    constructor({userId,data,image,createdAt,comments,likes}:postData){
        this.userId=userId,
        this.data=data,
        this.image=image,
        this.createdAt=createdAt,
        this.comments=comments,
        this.likes=likes
    }
}