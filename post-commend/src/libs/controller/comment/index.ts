import createCommentController from "./createCommentController";
import removeCommentController from "./removeCommentController";
export default (dependencies:any)=>{
    return {createComment:createCommentController(dependencies),removeComment:removeCommentController(dependencies)}
}