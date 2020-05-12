// Test
const app = require("./../index");
const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const expect = chai.expect

chai.use(chaiHttp);
it('should return keys', (done) => {
  chai.request(app)
    .get('/Ab Major')
    .end((err, res) => {
      if (err) { done(err) }
      expect(res).to.have.status(200)
      
      expect(res.body).to.be.a("object")
      expect(res.body.name).to.be.an('array')

      return done()
    })
})
