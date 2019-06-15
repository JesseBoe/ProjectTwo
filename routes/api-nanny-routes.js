var db = require("../models");

module.exports = function(app) {
  // Get all nannies
  app.get("/api/nannies", function(req, res) {
    db.Nanny.findAll({}).then(function(dbNanny) {
      res.json(dbNanny);
    });
  });

  // Create a new nanny
  app.post("/api/nannies", function(req, res) {
    db.Nanny.create(req.body).then(function(dbNanny) {
      res.json(dbNanny);
    });
  });

  // Delete an nanny by id
  app.delete("/api/nannies/:id", function(req, res) {
    db.Nanny.destroy({ where: { id: req.params.id } }).then(function(dbNanny) {
      res.json(dbNanny);
    });
  });
};
