import mongoose from "mongoose";

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
  idcreateur:{
    type: String
  },

});

const Offre = module.exports = mongoose.model('Offre', OffreSchema);

