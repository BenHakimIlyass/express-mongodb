const Offre = require("../models/offre");

import express from "express";
const router = express.Router();
import config from "../config/db";
import async from "async";

/* SAVE offre*/
router.post("/offre", function(req, res, next) {
  Offre.create(req.body)
    .then(res.json(req.body), console.log(req.body))
    .catch(err => console.log("error:", err), res.status(500).json({}));
});

router.get("/offre", function(req, res) {
  Offre.find({})
    .then(offres => {
      res.send({ data: offres });
    })
    .catch(err => console.log(err));
});
export default router;
