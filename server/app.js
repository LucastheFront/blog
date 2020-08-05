import dotenv from 'dotenv';
import express from 'express';
import router from './routes/index';
import { connectDb } from './models';

// Set up the express app
dotenv.config()
const app = express();
var cors = require('cors');

// Use cors, make uploads folder public and use router to make the calls
app.use(cors());
app.use('/uploads', express.static('uploads'));
app.use(router);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my application." });
  });

// Define port, listen on port to run server and connect to the database
connectDb().then(async () => {
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`)
    });
});