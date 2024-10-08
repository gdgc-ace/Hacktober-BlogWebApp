const mongoose = require('mongoose');

const connectDb = async () =>{
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log('Connection established', connect.connection.host)
    } catch (error) {
        console.log(error)
        ProcessingInstruction.exit(1)
    }
};

module.exports = connectDb