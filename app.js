import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import config from "./config/db";
import cors from "cors";

import router from "./routes/offre";
// import offreRoute from "./routes/offre";

//db connection
mongoose.connect(config.database, { useNewUrlParser: true });
mongoose.connection.on("connected", () => {
  console.log("Connected to database  " + config.database);
});
mongoose.connection.on("error", err => {
  console.log("Database error: " + err);
});

const app = express();
//handeling cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origins,X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use(router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
