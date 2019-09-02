import User from "../models/user";

import express from "express";
const router = express.Router();
import config from "../config/db";
import async from "async";

// Get user
router.get("/user/:id", function(req, res) {
  User.findById(req.params.id, function(err, post) {
    console.log("weeeeeeeeeee", req.params.id);
    if (err) console.log("errooooor", err);
    const response = res.json(post);
    console.log(response);
  });
});
/* SAVE user*/
router.post("/user", function(req, res) {
  User.create(req.body)
    .then(res.json(req))
    .catch(err => console.log("error:", err), res.status(500).json({}));
});
// //login
// router.post("/authenticate", (req, res, next) => {
//   const email = req.body.email;
//   const password = req.body.password;
//
//   User.getUserByEmail(email, (err, user) => {
//     if (err) throw err;
//     if (!user) {
//       return res.json({ success: false, msg: "Utilisateur non enregistré!" });
//     }
//     if (err) throw err;
//     User.comparePassword(password, user.password, (err, isMatch) => {
//       if (err) throw err;
//     });
//   });
// });
// {
// "offreName": "amin",
// "keywords": "3ouarti",
// "delay":"10 days",
// "price":"2dh",
// "workerName":"lolo",
// "date":"12/09/12"
// }

export default router;
