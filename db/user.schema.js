import mongoose from "mongoose";

const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    imageUrl: String,
    title: String,
    description: String,
  },
  { timestamps: true }
);

const User = mongoose.model("Album_Data",userSchema)
export default User;