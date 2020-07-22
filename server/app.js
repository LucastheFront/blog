import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/index';

// Set up the express app
const app = express();

// Parse incoming requests data and use router to make the calls
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

// Define port and listen on port to run server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});