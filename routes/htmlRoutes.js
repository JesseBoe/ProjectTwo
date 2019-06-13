var db = require("../models");

// var authCheck = function(req, res, next) {
//   if (!req.user) {
//     res.redirect("/");
//   } else {
//     next();
//   }
// };

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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin
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
>>>>>>> parent of 3917cbd... Revert "Merge pull request #18 from JesseBoe/passport"
=======
>>>>>>> origin
  //This is an example of enforcing a user to be logged in. If not logged in
  //the user is redirected to root

  // app.get("/MyProfile", authCheck, (req, res) => {
  //   res.render("profile");
  // })

<<<<<<< HEAD
>>>>>>> refs/remotes/origin/master
=======
>>>>>>> parent of 3917cbd... Revert "Merge pull request #18 from JesseBoe/passport"
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

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
