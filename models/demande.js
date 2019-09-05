import mongoose from "mongoose";

// create a schema
const DemandeSchema = mongoose.Schema({
  demandeName: {
    type: String
  },
  keywords: {
    type: String
  },
  delay: {
    type: String
  },
  idcreateur: {
    type: String
  }
});

const Demande = (module.exports = mongoose.model("Demande", DemandeSchema));
