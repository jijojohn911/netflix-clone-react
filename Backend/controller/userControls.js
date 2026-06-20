import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import User from '../model/user.js';

const generateToken = (id) => {
    console.log("userId.....", id);
    return jwt.sign(
        { id },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRES
        }
    )

}

export const Login = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({ message: 'email and password are required' })
        }
        const foundUser = await User.findOne({ email })   // model: User, instance: foundUser
        if (!foundUser) {
           return res.status(400).json({ message: "Invalid Credentials" })
        }
        const isMatch = await bcrypt.compare(password, foundUser.password)
        if (!isMatch) {
           return res.status(400).json({ message: "Invalid Credentials" })
        }

        const token = generateToken(foundUser._id)
        return res.status(200).json({
            message: "Login successful",
            success: true,
            token,
            user: {
                id: foundUser._id,
                username: foundUser.username,
                email: foundUser.email
            }
        })
    }
    catch(error) {
        return res.status(500).json({message:"server error"})
    }
}


export const signup = async (req, res) => {
    const { username, password, email } = req.body;
    try {
        if (!username || !password || !email) {
            return res.status(400).json({ message: "username, password and email are required" });
        }

        const existingUser = await user.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).json({ message: "username or email is already taken" });
        }

        const newUser = new user({ username, password, email });
        await newUser.save();

        return res.status(200).json({
            message: "user created successfully",
            success: true,
            token: generateToken(newUser._id),
            user: {
                id: newUser._id,
                username: newUser.username,
                email: newUser.email
            }
        });
    } catch (error) {

        
        console.error(error);
        return res.status(500).json({ message: "server error.." });
    }
};