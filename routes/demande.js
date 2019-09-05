var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var Demande = require("../models/demande");
const User = require("../models/user");
var ObjectID = require("mongodb").ObjectID;

/* GET ALL demandes */
router.get("/demandes", function(req, res, next) {
  Demande.find(function(err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* SAVE demande */
router.post("/saveDemande", function(req, res, next) {
  Demande.create(req.body, function(err, demande) {
    if (err) return next(err);
    res.json(demande);
  });
});

/* GET  demandess BY ID CREATOR   */
router.get("/demandes/:id", function(req, res, next) {
  Demande.collection
    .find({ idcreateur: req.params.id })
    .toArray((err, items) => {
      console.log(items);
      res.json(items);
    });
});

/* UPDATE demande */
router.put("/demande/:id", function(req, res, next) {
  Demande.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE demande */
router.delete("/demande/:id", function(req, res, next) {
  Demande.findByIdAndRemove(req.params.id, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
