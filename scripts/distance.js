var keys = require("../config/keys");
var axios = require("axios");

function getDistanceInMiles(zip, zip2) {
  var magicConverserionNumber = 1608;

  var url5 =
    "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=" +
    zip +
    "&destinations=" +
    zip2 +
    "&key=" +
    keys.google.distanceMatrix;

  axios.get(url5).then(function(response) {
    return response.data.rows[0].elements[0].distance / magicConverserionNumber;
  });
}

// function getAllCloseBy(loc) {
//   db.Nanny.findAll({}).then(function(list) {
//     var closeList = [];
//     list.forEach(function(element) {
//       if (getDistanceInMiles(loc, element.location) < 40) {
//         closeList.push(element);
//       }
//     });
//     return closeList;
//   });
// }

module.exports = getDistanceInMiles;