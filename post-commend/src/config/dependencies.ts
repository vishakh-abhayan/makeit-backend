import {
  createPost_useCase,
  updatePost_useCase,
  removePost_useCase,
  getAllPostByUser_useCase,
  getPostById_useCase,
  createComment_useCase,
  removeComment_useCase,
  getAllPosts_useCase,
  changeLike_useCase
} from "../libs/usecase";
import { postRepository, commentRepository } from "../libs/app/repository";

const useCase: any = {
  createPost_useCase,
  updatePost_useCase,
  removePost_useCase,
  getAllPostByUser_useCase,
  getPostById_useCase,
  createComment_useCase,
  removeComment_useCase,
  getAllPosts_useCase,
  changeLike_useCase
};
const repository: any = {
  postRepository,
  commentRepository,
};

export default { useCase, repository };
