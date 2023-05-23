export interface CommentData{
    postId:string;
    userId:string;
    data:string;
    createdAt:Date
}

export class Comment{
    postId:string;
    userId:string;
    data:string;
    createdAt:Date
    constructor({
        postId,
        userId,
        data,
        createdAt
    }:CommentData){
        this.postId=postId,
        this.userId=userId,
        this.data=data,
        this.createdAt=createdAt
    }
}