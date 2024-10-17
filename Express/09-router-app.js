const express = require('express');
const app = express();

const personRouter = require('./routes/people-controller');

app.use(express.urlencoded({ extended: false }));
app.use('/people', personRouter);

const initServer = async () => {
    try {
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    } catch (error) {
        console.log(error);
    }
}

initServer();
