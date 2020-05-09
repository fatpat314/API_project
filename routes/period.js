// Route
const Period = require("../models/period")
module.exports = (router) => {
    router.get('/period/:periodDates', (req, res) => {
      Period.find({ period: req.params.artistName })
        .then(result => {
          res.json({dates: result})
        }).catch(err => {
          throw err.message
        })
    })
};


// Figure out how to also get other data out of the artist
// and show multiple artists of a single period.
