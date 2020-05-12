// Route
const Artist = require("../models/artist")
const Songs = require("../models/songs")
module.exports = (router) => {
    router.get('/artist/:artistName', (req, res) => {
      Artist.find({ name: req.params.artistName })
        .then(result => {
          res.json({songs: result})
        }).catch(err => {
          throw err.message
        })
    })

    router.get('/artist', (req, res) => {
        console.log("HELP")
      Artist.find({artists: req.params.artistName})
        .then(result => {
          res.json({artist: result})
        }).catch(err => {
          throw err.message
        })
    })
};
