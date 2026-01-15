import { mongoose } from "mongoose";
import { DB_NAME } from "../constansts.js";

const connectDB = async () => {
  try {
    const connectInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MONGODB Connect !! DB_HOST :${connectInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB connection failed", error);
    process.exit(1);
  }
};

export default connectDB;
