import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./db/index.js";

dotenv.config({ path: "./env" });
connectDB();




/*
import { DB_NAME } from "./constants";


(  async  ()  =>  {
    try {
        await mongoose.connect(`${process.env.MONGO_DB_URL}/${DB_NAME}`)
    } catch (error) {
        console.error("ERROR: ", error)
        throw error
    }
})()

*/