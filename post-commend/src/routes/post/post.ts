import { postController } from "../../libs/controller";
import express from "express";
export default (dependencies: any) => {
  const router = express.Router();
  const { createPost, updatePost, removePost, getAllPostsByUser, getPost,getAllposts,changeLike } =
    postController(dependencies);

  router.post("/create", createPost);
  router.patch("/update", updatePost);
  router.delete("/remove/:id", removePost);
  router.get("/Uid/:userId", getAllPostsByUser);
  router.get("/Pid/:postId", getPost);
  router.get('/allPosts',getAllposts)
  router.post('/like',changeLike)
  return router;
};
