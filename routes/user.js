const express = require("express");
const router = express.Router();
const config = require("../config/db");
const User = require("../models/user");
var async = require("async");
var crypto = require("crypto-browserify");
const bcrypt = require("bcryptjs");

// Register user

router.post("/register", (req, res, next) => {
  let newUser = new User({
    firstname: req.body.firstname,
    email: req.body.email,
    lastname: req.body.lastname,
    tel: req.body.tel,
    password: req.body.password
  });

  const email = req.body.email;

  // test si l email existe déja

  User.getUserByEmail(email, (err, user) => {
    if (err) throw err;
    if (user) {
      //si oui msg d'erreur user deja inscrit
      return res.json({ success: false, msg: "Utilisateur déja inscrit!" });
    }
    if (err) throw err;

    //si non l appel de la methode addUser pour l'ajouter

    User.addUser(newUser, (err, user) => {
      if (err) {
        console.log(err);
        res.json({ success: false, msg: "L'inscription a  échoué! " });
      } else {
        res.json({
          success: true,
          email: email,
          msg: "Utilisateur enregistré!"
        });
      }
    });
  });
});

//recuperer un user par id

router.get("/user/:id", function(req, res, next) {
  User.findById(req.params.id, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// Authenticate

router.post("/authenticate", (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.getUserByEmail(email, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({ success: false, msg: "Utilisateur non enregistré!" });
    }
    if (err) throw err;
    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) throw err;

      if (!isMatch) {
        if (err) throw err;
        return res.json({
          success: false,
          msg: "Le mot de passe est incorrect"
        });
      } else {
        return res.json({
          success: true,
          user: {
            id: user._id,
            firstname: user.name,
            lastname: user.username,
            tel: user.tel,
            email: user.email
          },
          msg: "vous êtes connectés"
        });
      }
    });
  });
});

/* UPDATE USER */
router.put("/:id", function(req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
