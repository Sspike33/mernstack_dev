const mongoose = require('mongoose');
const mongo_url="mongodb+srv://root:root2@cluster0.njbr8.mongodb.net/"
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

const collection_name = "User_details";
const collection_filled = {
    id:String,
    name: String,
    email: String,
    phone_number: String,
    address: {
        street: String,
        city: String,
        state: String,
        zip_code: String
    },
    date_of_birth: Date,
    phone_number: String
}

const schema = mongoose.Schema(collection_filled);
const UserModel = mongoose.model(collection_name, schema);

const create_user=async()=>{
    await connectToMongo();
    try{
        const new_user = new UserModel({
            id:new mongoose.Types.ObjectId(),
            name: "Rahul",
            email: "rrspike.3@example.com",
            phone_number: "1234567890",
            address: {
                street: "321 beside ar park",
                city: "Ballari",
                state: "Karnataka",
                zip_code: "518301"
            },
            date_of_birth: new Date("1990-01-01"),
            phone_number: "*123033118"
        });
        const createDocument = await new_user.save();
        console.log('Trainer created successfully',createDocument);
    }catch(error){
        console.log(error);
    }finally{
        mongoose.connection.close();
    }
}

create_user();
