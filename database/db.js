import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {
    const USERNAME = process.env.DB_USERNAME;
    const PASSWORD = process.env.DB_PASSWORD;

    
    // const MONGO_URI = `mongodb+srv://anubhavav04:HC65TkHanaavHq8K@anubhav.zab0ock.mongodb.net/`
    const MONGO_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@anubhav.zab0ock.mongodb.net/`
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;