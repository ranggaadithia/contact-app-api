const db = require('../model')
const Contact = db.contacts

exports.findAll = (req, res) => {
  Contact.find()
  .then((result) => {
    res.send(result)
  }). catch((error) => {
    res.status(500).send({
      message: error.message || "Some error while retriving data"
    })
  });
}