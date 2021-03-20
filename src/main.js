import express from "express";
import { InitMongo } from "./model/configs/mongo";

const app = express();
InitMongo();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(process.env.PORT || 6969, () => {
  console.log(`Server started successfully!`);
});
