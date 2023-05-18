import getAllUsersController from './getUsersController'
// import getUserController from './getUserController'
import getUserById from './getUserByIdController'
export default (depentencies:any)=>{
    return {getAllUsersController:getAllUsersController(depentencies),getUserById:getUserById(depentencies)}
}