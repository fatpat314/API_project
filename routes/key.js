// Route
router.get('/key', (req, res) => {
  Songs.find({ song: req.params.artistName })
    .then(result => {
      res.json({songs: result.toArray()})
    }).catch(err => {
      throw err.message
    })
})
