var keys = require("../config/keys");
var axios = require("axios");
var db = require("../models");

function getDistanceInMiles(zip, zip2, cb) {
  var magicConverserionNumber = 1608;

  var url5 =
    "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=" +
    zip +
    "&destinations=" +
    zip2 +
    "&key=" +
    keys.google.distanceMatrix;

  axios
    .get(url5)
    .then(function(response) {
      cb(
        response.data.rows[0].elements[0].distance.value /
          magicConverserionNumber
      );
    })
    .catch(function(err) {
      console.log(err);
    });
}

function getAllCloseBy(loc, cb) {
  var closeBy = [];
  var count = 0;
  var finished = 0;
  db.Nanny.findAll({}).then(function(list) {
    count = list.length;
    list.forEach(function(element) {
      getDistanceInMiles(loc, element.location, function(res) {
        finished++;
        if (res < 50) {
          closeBy.push(element);
          //cb(element);
        }
        if (count == finished) {
          cb(closeBy);
        }
      });
    });
  });
}

module.exports = {
  getAllCloseBy: getAllCloseBy,
  getDistanceInMiles: getDistanceInMiles
};
