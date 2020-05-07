// Route
router.get('/period/:periodDates', (req, res) => {
  Artist.find({ artist: req.params.artistName })
    .then(result => {
      res.json({songs: result.toArray()})
    }).catch(err => {
      throw err.message
    })
})


// Figure out how to also get other data out of the artist
// and show multiple artists of a single period.
