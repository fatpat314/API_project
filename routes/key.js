// Route
const Key = require("../models/key")
module.exports = (router) => {
    router.get('/key', (req, res) => {
      Key.find({ song: req.params.artistName })
        .then(result => {
          res.json({songs: result})
        }).catch(err => {
          throw err.message
        })
    })
};
