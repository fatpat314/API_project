// Route
const Key = require("../models/key")
module.exports = (router) => {
    router.get('/:keyName', (req, res) => {
      Key.find({ name: req.params.keyName })
        .then(result => {
          res.json({name: result})
        }).catch(err => {
          throw err.message
        })
    })
};
