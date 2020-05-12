// Test
const app = require("./../index");
const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const expect = chai.expect

chai.use(chaiHttp);
it('should return dates', (done) => {
  chai.request(app)
    .get('/period/1930')
    .end((err, res) => {
      if (err) { done(err) }
      expect(res).to.have.status(200)
      // console.log("HERE!!!!!!",res.body.dates)
      expect(res.body.dates).to.be.a("array")
      expect(res.body.dates[0]).to.be.an('object')

      return done()
    })
})
