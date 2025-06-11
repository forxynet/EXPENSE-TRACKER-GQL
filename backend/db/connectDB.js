import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongo_db conection has been made!");
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};
