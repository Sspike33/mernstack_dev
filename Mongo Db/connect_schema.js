//Database Connection

const mongoose = require('mongoose');
const mongo_url="mongodb+srv://spike_33:root1@cluster0.hjlku.mongodb.net/"
const connectToMongo=async()=>{
    mongoose.Promise=global.Promise;
    try{
        await mongoose.connect(mongo_url);
        console.log("Connected to Database");

    }
    catch(error){
        console.log("failed to connect to Database",error);
        process.exit(1);
    }
}

// Database Schema 

const collection_name='trainer';
const collection_filed={
    name:String,
    location:String,
    technology:String,
    phone_number:String
};
const collection_config={
   timestamps:false
};
const schema =mongoose.Schema(collection_filed, collection_config);
const TrainerModel=mongoose.model(collection_name, schema);