import models from '../models';
var fs = require('fs');

class PostsController {
    async getAllPosts (req, res) {
        try {
            const data = await models.Post.find();
            res.status(200).json(data);
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
                post: data,
            })
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

    async createPost(req, res) {
        const post = new models.Post({
            image: {
                data: fs.readFileSync(req.file.path),
                contentType: req.file.mimetype
            },
            title: req.body.title,
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