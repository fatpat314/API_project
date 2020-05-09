// Route
// const Artist = require("../models/artist")
// module.exports = (router) => {
//     router.get('/artist/:artistName', (req, res) => {
//       Songs.find({ artist: req.params.artistName })
//         .then(result => {
//           res.json({songs: result})
//         }).catch(err => {
//           throw err.message
//         })
//     })
//
//     router.get('/songs', (req, res) => {
//         console.log("HELP")
//       Artist.find({artists: req.params.artistName})
//         .then(result => {
//           res.json({artist: result})
//         }).catch(err => {
//           throw err.message
//         })
//     })
// };

// // Route
const Songs = require("../models/songs")
module.exports = (router) => {
    router.get('/songs/:songName', (req, res) => {
      Songs.find({ songs: req.params.songName })
        .then(result => {
          res.json({songs: result})
        }).catch(err => {
          throw err.message
        })
    })

    router.get('/songs', (req, res) => {
        console.log("HELP")
        Songs.find({ })
            .then(result => {
                res.json({songs: result})
            }).catch(err => {
                throw err.message
            })
    })
};
// Also figure out how to specifically show
// the individual songs data, like dates, key, that kinda stuff.
