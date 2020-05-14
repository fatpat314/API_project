// Route
const Period = require("../models/period")
module.exports = (router) => {
    router.get('/period/:periodDates', (req, res) => {
      Period.find({ dates: req.params.periodDates })
        .then(result => {
          res.json({dates: result})
        }).catch(err => {
          throw err.message
        })
    })

};
