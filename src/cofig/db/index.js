const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const URI = process.env.DATABASE_ULR;

async function connect(){
    try {
        await mongoose.connect( URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true,
            useCreateIndex: true,
        });
        console.log('connect successfully!!!');
    } catch (error) {
        console.log('err: ', error);
    }
}


module.exports = {connect};