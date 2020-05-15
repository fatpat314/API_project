const Artist = require("../models/artist");
const Songs = require("../models/songs")
const User = require('../models/users')

module.exports = (app) => {

    // create a new artist
    app.post("/new/artist", (req, res) => {
        if(!req.user) {
            return res.status(401).send({status: 401, message: "Unauthenticated request"})
        }
        var song = new Songs(req.body)
            song.artist = req.body.name
            console.log(song)
            song.save().then(e => {
            console.log("EEEEEEEEEE",e)
            const artist = new Artist(req.body);
                artist.songs.push(song._id)
                artist.save()
                console.log("Success")
                return res.json({status:"success"})
        }).catch(err => {
             console.log(err)
    })
})

    app.get('/search/:artistName', (req, res) => {
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!, ")
        Artist.findOne({ name: req.params.artistName })
            .then(artist =>{
                console.log("!!!!!!!!!!!!!!!!!!!!!!", artist)
              return res.json(artist)
            }).catch(err => {
              throw err.message
            })
        })

    app.get('/artist', (req, res) => {
        console.log("HELP")
        Artist.find({artists: req.params.artistName})
            .then(result => {
            res.json({artist: result})
            }).catch(err => {
              throw err.message
            })
        })

    app.post('/update/artist/:id', (req, res) => {
        // if (!req.user){
        //     return res.status(401.send({status: 401, message: "Unauthenticated request"})
        // }
        update = req.body
        if (update.name != null && update.songs != null) {
            artist.findById().then(artist => {
                artist.name = update.name;
                artist.songs = update.songs
                proposal.save()
                return res.status(200).send({status: 200, message: "Success"})
            })
            .catch(err => {
                console.log(err)
                return res.status(401).send({status:401, message:"Error", err:err})
            })
        }
    })

    app.delete("/delete/:artistName", (req, res) => {

        Artist.deleteOne({artistName: req.body.name}, (err, artist) => {
                if(err) {
                    res.send('error removing')
                }else{
                    console.log(artist)
                    res.status(204);
                }
            });

        })

    }
