import mongoose from "mongoose";

let userSchema = mongoose.Schema({
  // uid : Number, 
  email: String,
  password: String,
  age: Number,
  profile: {
    name: String,
    bio: String,
    interests: String,
  },
});

export default userSchema;
