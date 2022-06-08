const mongoose = require('mongoose');

//Set mongodb connection 
const connectMongoDB = async () => {

    try {
        let connect = await mongoose.connect('mongodb+srv://salim:1234567890@mernstackcluster.w5afr.mongodb.net/MERN-Stack?retryWrites=true&w=majority')

        console.log(`MongoDB database connect to our server successfully HOST : ${connect.connection.host}`.bgGreen.black);

    } catch (error) {
        console.log(`${error}`.bgRed.black);
    }

}

module.exports = connectMongoDB;