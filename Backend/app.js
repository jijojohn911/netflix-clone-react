import 'dotenv/config';
import express from 'express';
import cors from 'cors'
import userAuth from './routes/userAuthRoutes.js'
import mongoose from 'mongoose';


const app = express();

app.use(cors({
    origin:process.env.CLIENT_URL || "*",
    credentials:true
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/api',userAuth);


const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB connected successfuly');
        
        app.listen(process.env.PORT || 3000,()=>{
    console.log(`server is running on port ${process.env.PORT }`);
    })
    } catch (error) {
        console.error('Database connection failed:',error.message);
        process.exit(1);
    }
}
connectDB()

    
