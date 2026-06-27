// import mongoose from "mongoose"
// import dotenv from "dotenv"
// import { DB_NAME } from "../constants.js"


// dotenv.config()
// const connectDB = async()=>{
//     try {
//         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         console.log("Mongoose is connected");
//     } catch (error) {
//         console.log("mongoDB connection error :"+ error);
//     }
// }

// export default connectDB;

import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "dns";
import { DB_NAME } from "../constants.js";

dotenv.config();

// Force IPv4
dns.setDefaultResultOrder("ipv4first");

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`,
            {
                serverSelectionTimeoutMS: 30000
            }
        );

        console.log("Mongoose is connected");
        console.log(connectionInstance.connection.host);

    } catch (error) {
        console.log("mongoDB connection error:", error);
    }
}

export default connectDB;