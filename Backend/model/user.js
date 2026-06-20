import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import validator from 'validator';
import { Schema } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "please provide a valid email"]

    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    username: {
        type: String,
        trim: true,
        required:true
    }
})

userSchema.pre('save', async function () {
    if (!this.isModified("password")) {
        return;
    }
    this.password = await bcrypt.hash(this.password, 10);
});

const user = mongoose.model("user",userSchema)

export default user;