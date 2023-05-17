import { getAllUser_useCase } from "../libs/useCase/user/getAllUser_useCase";
import { userRepository } from '../libs/app/repository/index'

const userCase:any = {
    getAllUser_useCase
}

const repository:any={
      userRepository
}


export default { userCase, repository }