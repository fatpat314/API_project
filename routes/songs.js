// Route
router.get('/songs/:songName', (req, res) => {
  Song.find({ songs: req.params.songName })
    .then(result => {
      res.json({songs: result.toArray()})
    }).catch(err => {
      throw err.message
    })
})
// Also figure out how to specifically show
// the individual songs data, like dates, key, that kinda stuff.
