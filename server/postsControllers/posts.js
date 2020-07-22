import db from '../db/db';

class PostsController {
    getAllPosts(req, res) {
        res.status(200).send({
            success: 'true',
            message: 'blog posts retrieved successfully',
            posts: db
        });
    }

    getPost(req, res) {
        const id = parseInt(req.params.id, 10);
        db.map((post) => {
            if (post.postId === id) {
                return res.status(200).send({
                    success: 'true',
                    message: 'post retrieved successfully',
                    post
                });
            }
        });
        return res.status(400).send({
            success: 'false',
            message: 'post does not exist',
        });
    }

    createPost(req, res) {
        if (!req.body.title || !req.body.description) {
            res.status(400).send({
                success: 'false',
                message: 'title or description are required'
            });
        }
        const newPost = {
            postId: db.length + 1,
            title: req.body.title,
            description: req.body.description,
            article: req.body.article
        }
        db.push(newPost);
        return res.status(200).send({
            success: 'true',
            message: 'new post successfully added to db',
            newPost
        });
    }
}

const postController = new PostsController();
export default postController;