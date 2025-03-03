import mongoose from "mongoose";
import { union } from "zod";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        minlength: 6
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
});

const User = mongoose.model("User", userSchema);

export default User;