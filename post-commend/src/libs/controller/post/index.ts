import createPostController from './createPostController'
import updatePostController from './updatePostController'
import removePostController from './removePostController'
export default (dependencies:any)=>{
    return {createPost:createPostController(dependencies),updatePost:updatePostController(dependencies),removePost:removePostController(dependencies)}
}