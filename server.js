require('dotenv').config();
const express = require('express');
const connectDB = require('./data/database');

const app = express();

app.use(express.json());

connectDB(app);

app.use('/', require('./routes'));

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`)
});