var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20");
var keys = require("./keys");
var db = require("../models");

//Instead of sending the whole table of data to the client, we only send the id
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

//When the client makes a request to our server, we can take the id they send to us and
//grab all the data related to that user with this.
passport.deserializeUser(function(id, done) {
  db.Example.findOne({ where: { id: id } }).then(function(user) {
    if (user) {
      done(null, user);
    }
  });
});

passport.use(
  new GoogleStrategy(
    {
      //Options for google strategy
      callbackURL: "/auth/google/redirect",
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret
    },
    function(accessToken, refreshToken, profile, done) {
      //Passport Callback Function
      console.log(profile);
      //TODO: Change dbExamole to our actual database.
      db.Example.findOne({ where: { googleID: profile.id } }).then(function(
        user
      ) {
        if (user) {
          //Existing user
          console.log("Logging in with existing user");
          done(null, user);
        } else {
          db.Example.create({
            googleID: profile.id,
            googleName: profile.displayName
          }).then(function(newUser) {
            done(null, newUser);
          });
        }
      });
    }
  )
);
