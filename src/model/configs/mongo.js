import mongo from "mongoose";

export const InitMongo = async () => {
  try {
    await mongo.connect(
      process.env.MONOGO_URI || "mongodb://127.0.0.1:27017/skindle",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("Connected to the database successfully!");
  } catch (error) {
    console.log("Could not connect to the database!");
  }
};
