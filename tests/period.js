// Test
it('should return dates', (done) => {
  chai.request(app)
    .get('/dates/1935')
    .end((err, res) => {
      if (err) { done(err) }
      expect(res).to.have.status(200)
      expect(res.body.artists).to.be.an('array')
      expect(res.body.artists[0]).to.be.an('object')
      expect(res.body.artists[0]).to.have.property('name')
      expect(res.body.artists.songs[0].title).to.equal('Take the A train')
      //Am I allowed to do this^^^^. check the song of the artists
      done()
    })
})
