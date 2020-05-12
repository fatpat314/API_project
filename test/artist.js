// Test
const app = require("./../index");
const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const expect = chai.expect

chai.use(chaiHttp);
describe("site", function() {
    it('should return an artist', (done) => {
      chai.request(app)
        .get('/artist/Duke Ellington')
        .end((err, res) => {
          if (err) { done(err) }
          expect(res).to.have.status(200)
          expect(res.body.songs).to.be.an('array')
          expect(res.body.songs[0]).to.be.an('object')
          expect(res.body.songs[0]).to.have.property('name')
          expect(res.body.songs[0].name).to.equal('Duke Ellington')
          done()
        })
    })
})
