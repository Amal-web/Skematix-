const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const DB = process.env.MONGO_URI.replace(
      "<password>",
      process.env.MONGO_PASSWORD
    );
    await mongoose
      .connect(DB)
      .then(() => console.log("DB CONNECTED SUCCESSFULLY"));
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
