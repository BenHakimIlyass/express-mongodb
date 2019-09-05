var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var Offre = require("../models/offre");
const User = require("../models/user");
var ObjectID = require("mongodb").ObjectID;

/* GET ALL offres */
router.get("/offres", function(req, res, next) {
  Offre.find(function(err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* SAVE offre */
router.post("/saveOffre", function(req, res, next) {
  Offre.create(req.body, function(err, offre) {
    if (err) return next(err);
    res.json(offre);
  });
});

/* GET  offres BY ID CREATOR   */
router.get("/offres/:id", function(req, res, next) {
  Offre.collection.find({ idcreateur: req.params.id }).toArray((err, items) => {
    console.log(items);
    res.json(items);
  });
});

/* UPDATE offre */
router.put("/offre/:id", function(req, res, next) {
  Offre.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE offre */
router.delete("/offre/:id", function(req, res, next) {
  Offre.findByIdAndRemove(req.params.id, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
