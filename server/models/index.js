import mongoose from 'mongoose';
import Post from './post';

const connectDb = () => {
    const connect = mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, "connection error:"));
    db.once('open', function() {
        console.log('Successfully connected to the db!')
    });
    return connect;
}

const models = { Post };

export { connectDb };
export default models;