import models from '../models';

class PostsController {
    async getAllPosts (req, res) {
        try {
            const data = await models.Post.find();
            res.status(200).json({
                success: 'true',
                message: 'blog posts retrieved successfully',
                posts: data,
            })
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

    async getPost(req, res) {
        try {
            const data = await models.Post.findById(req.params.id);
            if (data == null) {
                return res.status(404).json({
                    message: 'Cannot find post',
                })
            }

            res.status(200).json({
                success: 'true',
                message: 'blog posts retrieved succcessfully',
                post: data,
            })
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

    async createPost(req, res) {
        const post = new models.Post({
            title: req.body.title,
            description: req.body.description,
            article: req.body.article,
            author: req.body.author,
        });
        try {
            const newPost = await post.save();
            res.status(201).json({
                newPost: newPost
            });
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }
}

const postController = new PostsController();
export default postController;