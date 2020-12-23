const express = require('express');
const connectDB = require('./config/db.js');
const app = express();

// init env
require('dotenv').config({
    path: './config/config.env'
});

// connect to db
connectDB();

// body parser
app.use(express.json());

// use route
app.use('/search', require('./routes/search.js'));
app.use('/login', require('./routes/login.js'));
app.use('/signup', require('./routes/signup.js'));

app.get('/healthcheck', (req, res) => {
    res.send('healthy');
});

const PORT = process.env.PORT | 8080;

app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
});