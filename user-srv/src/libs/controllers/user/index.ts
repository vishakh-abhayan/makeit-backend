import getAllUsersController from './getUsersController'
// import getUserController from './getUserController'
export default (depentencies:any)=>{
    return {getAllUsersController:getAllUsersController(depentencies)}
}