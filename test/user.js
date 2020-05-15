const app = require("./../index");
const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const expect = chai.expect

chai.use(chaiHttp);
describe("site", function() {
    it('should login', (done) => {
      chai.request(app)
        .post('/login')
        .send({ username: "Test user", password: "whocares"})
        .end(function(err, res) {
            res.should.have.status(401);
        done()
        })
        })
    })
