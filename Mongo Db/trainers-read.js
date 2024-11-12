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

const readAllTrainers = async()=>{
    await connectToMongo();
    try{
        const trainers = await TrainerModel.find(); //findOne({name:String})
        console.log("All Trainers:", trainers);
    }catch(err){
        console.log("Error reading trainers:",err);
    }finally{
        mongoose.connection.close();
    }
}

readAllTrainers();


//both update and read in one file


// const UpdateTrainers = async()=>{
//     await connectToMongo();
//     try{
//         const updatedTrainer = await TrainerModel.updateOne({name:"Rahul Reddy"},{$set:{name:"Spike"}});
//         console.log("Trainer updated:", updatedTrainer);
//     }catch(err){
//         console.log("Error updating trainer:",err);
//     }finally{
//         mongoose.connection.close();
//     }
// }

// (async()=>{
//    await UpdateTrainers();
//     readAllTrainers();
// })();
