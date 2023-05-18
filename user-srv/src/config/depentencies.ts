import { getAllUser_useCase,createNewUser_useCase,  getUserBy_Id_useCase } from "../libs/useCase/user";
import { userRepository } from '../libs/app/repository/index'

const userCase:any = {
    getAllUser_useCase,
    createNewUser_useCase,
    getUserBy_Id_useCase
}

const repository:any={
      userRepository
}


export default { userCase, repository }