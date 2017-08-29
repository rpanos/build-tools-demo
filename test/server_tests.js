/**
 * Created by rpanos on 8/28/17.
 */

var server = require("../src/server.js");
const Lab = require('lab');
const lab = exports.lab = Lab.script();

lab.test("When get-list endpoint is called, it gets an array of ten", function(done) {
    var options = {
        method: "GET",
        url: "/get-list"
    };

    server.inject(options, function(response) {
        var result = response.result;

        Lab.expect(response.statusCode).to.equal(200);
        Lab.expect(result).to.be.instanceof(Array);
        Lab.expect(result).to.have.length(10);

        done();
    });
});

lab.test("When get-list endpoint is called with reqLimit=5, it gets an array of 5", function(done) {
    var options2 = {
        method: "GET",
        url: "/get-list?reqLimit=5"
    };
    server.inject(options2, function(response) {
        var result = response.result;

        Lab.expect(response.statusCode).to.equal(200);
        Lab.expect(result).to.be.instanceof(Array);
        Lab.expect(result).to.have.length(5);

        done();
    });
});

lab.test("When demo endpoint is called, it gets a proper return status", function(done) {
    var options3 = {
        method: "GET",
        url: "/demo"
    };

    server.inject(options3, function(response) {
        var result = response.result;
        Lab.expect(response.statusCode).to.equal(200);

        done();
    });
});