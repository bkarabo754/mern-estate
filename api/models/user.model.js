import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, //username is required, a user cant login without a username
        unique: true, // duplicate usernames will result in an error. It is not allowed!
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },

}, {timestamps: true});

const User = mongoose.model("User", userSchema)

export default User;