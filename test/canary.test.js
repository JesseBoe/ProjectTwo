var chai = require("chai");
var chaiHttp = require("chai-http");
var expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);

var request;

describe("Post /api/distance", function() {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db

  it("should calculate the distance between zip codes", function(done) {
    // Add some examples to the db to test with
    // Request the route that returns all examples
    request
      .post("/api/distance")
      .send({ zip1: 98023, zip2: 98108 })
      .end(function(err, res) {
        var responseStatus = res.status;
        var responseBody = res.body;

        // Run assertions on the response

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody).to.be.an("object");

        expect(responseBody.distance).to.be.an("float");

        // The `done` function is used to end any asynchronous tests
        done();
      });
  });
});
