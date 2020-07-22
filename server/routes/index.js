import express from 'express';
import postController from '../postsControllers/posts';

const router = express.Router();

router.get('/api/v1/posts', postController.getAllPosts);
router.get('/api/v1/posts/:id', postController.getPost);
router.post('/api/v1/posts', postController.createPost);

export default router;