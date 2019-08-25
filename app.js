import express from "express";
import router from "./routes/index.js";
import bodyParser from "body-parser";
const db = require("./config/keys").mongoURI;

import mongoose from "mongoose";
const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/mytestdb";

//setting db connection
mongoose
  .connect(url, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch(err => {
    console.log(err);
    console.log("\x1b[31m\x1b[1m MongoDB Not Connected");
  });

// Set up the express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
