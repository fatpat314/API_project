// Test
it('should return an artist', (done) => {
  chai.request(app)
    .get('/artist/duke_ellington')
    .end((err, res) => {
      if (err) { done(err) }
      expect(res).to.have.status(200)
      expect(res.body.songs).to.be.an('array')
      expect(res.body.songs[0]).to.be.an('object')
      expect(res.body.songs[0]).to.have.property('title')
      expect(res.body.songs[0].title).to.equal('Take the A train')
      done()
    })
})
