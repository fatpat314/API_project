// Test
const app = require("./../index");
const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const expect = chai.expect

it('should return songs', (done) => {
  chai.request(app)
    .get('/songs/:Equinox')
    .end((err, res) => {
      if (err) { done(err) }
      expect(res).to.have.status(200)
      console.log("HERE!!!!!!!",res.body.name)
      expect(res.body.name).to.be.an('array')

      done()
    })
})
