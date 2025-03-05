import mongoose from "mongoose";
import { union } from "zod";

const contactSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 18
    },
    number: {
        type: String,
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 10
    }
})

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;