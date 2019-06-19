var db = require("../models");
var distance = require("./../scripts/distance");
var axios = require("axios");

<<<<<<< HEAD
var authCheck = function(req, res, next) {
  if (!req.user) {
    res.redirect("/");
  } else {
    next();
  }
};

=======
>>>>>>> 5932c463ca2d5a0a05d277b471e57ef1e77329a6
module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("homepage", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/sign-up", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("sign-up", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

<<<<<<< HEAD
=======

>>>>>>> 5932c463ca2d5a0a05d277b471e57ef1e77329a6
  app.get("/availability", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("availability", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/search", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("searchResults", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });
  //This is an example of enforcing a user to be logged in. If not logged in
  //the user is redirected to root

  // app.get("/MyProfile", authCheck, (req, res) => {
  //   res.render("profile");
  // })

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  app.post("/search/query", function(req, res) {
    distance.getAllCloseBy("98023", function(res2) {
      console.log(res2);
      res.json(res2);
    });
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
