require("dotenv").config();

import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/index';
import { connectDb } from './models';

// Set up the express app
const app = express();

// Parse incoming requests data and use router to make the calls
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

// Define port, listen on port to run server and connect to the database
connectDb().then(async () => {
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`)
    });
});