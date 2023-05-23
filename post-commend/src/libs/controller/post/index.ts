import createPostController from './createPostController'
import updatePostController from './updatePostController'
import removePostController from './removePostController'
import getAllPostByUserController from './getAllPostByUserController'
import getPostByIdController from './getPostByIdController'
import getAllPostsController from './getAllPostsController'
import changeLikeController from './changeLikeController'
export default (dependencies:any)=>{
    return {createPost:createPostController(dependencies),
        updatePost:updatePostController(dependencies),
        removePost:removePostController(dependencies),
        getAllPostsByUser:getAllPostByUserController(dependencies),
        getPost:getPostByIdController(dependencies),
        getAllposts:getAllPostsController(dependencies),
        changeLike:changeLikeController(dependencies)
    }
}