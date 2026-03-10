require('dotenv').config();
const express = require('express');
const connectDB = require('./data/database');

const app = express();

app.use(express.json());

connectDB(app);

app.use('/', require('./routes'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running at port ${port}`)
});