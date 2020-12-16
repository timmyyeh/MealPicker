const express = require('express');
const connectDB = require('./config/db.js');
const app = express();

// init env
require('dotenv').config({
    path: './config/config.env'
});

// connect to db
connectDB();

const PORT = process.env.PORT | 8080;

app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
});