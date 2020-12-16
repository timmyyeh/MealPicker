const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log(`Connected to DB`);
    } catch (err) {
        console.log(`Error connecting to db ${err}`);
    }
}

module.exports = connectDB;