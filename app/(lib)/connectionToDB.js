import mongoose from "mongoose";

async function connectionToDB() {
  try {
    mongoose.connect(process.env.mongodb_url);
    console.log("connected To Db");
  } catch (error) {
    console.log(error);
    throw new Error("Not connected to db");
  }
}

export default connectionToDB;
