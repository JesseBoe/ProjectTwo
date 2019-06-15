var db = require("../models");
var distance = require("../scripts/distance");

module.exports = function(app) {
  // Get all parents
  app.get("/api/parents", function(req, res) {
    db.Parent.findAll({}).then(function(dbParent) {
      res.json(dbParent);
    });
  });

  // Create a new parent
  app.post("/api/parents", function(req, res) {
    db.Parent.create(req.body).then(function(dbParent) {
      res.json(dbParent);
    });
  });

  app.get("/api/distance/", function(req, res) {
    res.json({ distance: distance(req.body.zip1, req.body.zip2) });
  });

  // Delete an parent by id
  app.delete("/api/parents/:id", function(req, res) {
    db.Parent.destroy({ where: { id: req.params.id } }).then(function(
      dbParent
    ) {
      res.json(dbParent);
    });
  });
};
