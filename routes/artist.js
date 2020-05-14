// Route
const Artist = require("../models/artist")
const Songs = require("../models/songs")
const User = require("../models/users")
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

    router.post("/artist/new", (req, res) => {
        if (req.user){
            var artist = new Artist(req.body);
                res.json({ artist: req.body })
                artist.save()
                    .then(artist => {
                    return Artist
                })
            } else {
                return res.status(401)};
        })

    router.put("/:artistName", (req, res) => {
        Artist.findByIdAndUpdate(req.params.artistName, req.body).then(() => {
            return Artist.findOne({_id: req.params.artistName})
        }).then((artist) => {
            return res.json({artist})
        }).catch((err) => {
            console.log("ERROR")
        })
    })

    router.delete("/delete/:artistName", (req, res) => {

        Artist.findByIdAndUpdate(req.params.artistId, req.body).then((result) => {
            if (result === null) {
                return res.json({name: 'Artist, does not exist.'})
            }
            return res.json({
                'Artist': 'Successfully deleted.',
                'name': req.params.artistName
            })
        })
    })

};
