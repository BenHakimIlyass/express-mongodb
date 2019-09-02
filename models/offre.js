import mongoose from "mongoose";
var Schema = mongoose.Schema;

// create a schema
const OffreSchema = mongoose.Schema({
  offreName: {
    type: String
  },
  keywords: {
    type: String
  },
  delay: {
    type: String
  },
  price: {
    type: String
  },
  workerName: String,
  date: String
});

const Offre = (module.exports = mongoose.model("Offre", OffreSchema));
