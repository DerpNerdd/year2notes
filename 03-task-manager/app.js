const express = require('express');

const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const port = process.env.PORT | 3000;

//Local Middleware
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

//Libraries
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

//Routes
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

//Initiate Server
const serverInit = async () => {
    try {
        await connectDB();
        console.log('Connected to MongoDB');
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

serverInit();