import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const postSchema = new Schema(
    {
        image: {
            data: Buffer,
            contentType: String,
        },
        title: {
            type: String,
            required: true,
        },
        article: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        }
    },
    { timestamps: true },
);

const Post = mongoose.model('Post', postSchema);

export default Post;