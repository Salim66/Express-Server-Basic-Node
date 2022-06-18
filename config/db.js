const mongoose = require('mongoose');

//Set mongodb connection 
const connectMongoDB = async () => {

    try {
        let connect = await mongoose.connect(process.env.MONGO_DB);

        console.log(`MongoDB database connect to our server successfully HOST : ${connect.connection.host}`.bgGreen.black);

    } catch (error) {
        console.log(`${error}`.bgRed.black);
    }

}

module.exports = connectMongoDB;