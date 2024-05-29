import mongoose from "mongoose";
import  'dotenv/config.js';
mongoose.connect(process.env.DATABASE_URL)
.then( ()=>{console.log("database conected")})
.catch(()=>{console.log("database connection failed")})