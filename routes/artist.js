// Route
router.get('/artist/:artistName', (req, res) => {
  Songs.find({ artist: req.params.artistName })
    .then(result => {
      res.json({songs: result.toArray()})
    }).catch(err => {
      throw err.message
    })
})
