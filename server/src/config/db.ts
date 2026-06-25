import mongoose from "mongoose";
import { env } from "./env";
import { DB_NAME } from "../utils/constants";

export const connectDB = async () => {
  try {
    await mongoose.connect(`${env.MONGODB_URI}/${DB_NAME}`);

    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Failed");
    process.exit(1);
  }
};
