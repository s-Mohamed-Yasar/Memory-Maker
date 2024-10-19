import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongodbConnection = () =>{
    mongoose.connect(`${process.env.MONGODB_CONNECTION_STRING}`);
}

export default mongodbConnection