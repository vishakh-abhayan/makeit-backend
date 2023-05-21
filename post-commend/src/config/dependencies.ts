import { createPost_useCase, updatePost_useCase,removePost_useCase } from '../libs/usecase'
import { postRepository } from '../libs/app/repository'

const useCase:any={
    createPost_useCase,
    updatePost_useCase,
    removePost_useCase
}
const repository:any={
    postRepository
}

export default {useCase,repository}