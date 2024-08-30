import mongoose from "mongoose";

async function connectionToDB() {
  try {
    mongoose.connect(process.env.mongodb_url);
  } catch (error) {
    console.log(error);
    throw new Error("Not connected to db");
  }
}

export default connectionToDB;
