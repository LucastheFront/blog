import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: String,
        image: String,
        author: String,
    },
    { timestamps: true },
);

const Post = mongoose.model('Post', postSchema);

export default Post;