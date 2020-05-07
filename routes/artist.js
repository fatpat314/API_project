// Route
const Artist = require("../models/artist")
module.exports = (router) => {
    router.get('/artist/:artistName', (req, res) => {
      Songs.find({ artist: req.params.artistName })
        .then(result => {
          res.json({songs: result})
        }).catch(err => {
          throw err.message
        })
    })

    router.get('/artist/', (req, res) => {
      Artist.find({})
        .then(result => {
          res.json({artist: result})
        }).catch(err => {
          throw err.message
        })
    })
};
