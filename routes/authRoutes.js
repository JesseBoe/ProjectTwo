var passport = require("passport");

module.exports = function(app) {
  app.get("/auth/login", function(req, res) {
    res.render("login");
  });

  app.get("/auth/logout", function(req, res) {
    //handle with passport
    req.logout();
    res.redirect("/");
  });

  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile"]
    })
  );
  //Callback for google after auth
  app.get("/auth/google/redirect", passport.authenticate("google"), function(
    req,
    res
  ) {
    res.redirect("/");
  });
};
