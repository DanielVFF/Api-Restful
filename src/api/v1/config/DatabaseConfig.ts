import mongoose from "mongoose";

require('dotenv').config();

//const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoDbUrl : string = process.env.MONGO_DB_URL?? "";
if(mongoDbUrl==""){
    console.log("Insert the MONGO_DB_URL at .env")
}else{
    mongoose.Promise = Promise;
    mongoose.connect(mongoDbUrl);
    mongoose.connection.on('error',(err : Error)=>{
        console.log("There was something wrong with the connection to the database, please check it");
    })
}

module.exports.mongoose;