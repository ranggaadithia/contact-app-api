const validator = require('validator')
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


exports.create = (req, res) => {
  const {name, email, phone} = req.body

  if (!validator.isEmail(email)) {
    return res.status(409).send({
      message: "Email is not valid."
    })
  }

  if(!validator.isMobilePhone(phone, 'id-ID')) {
    return res.status(409).send({
      message: "Phone number is not valid."
    })
  }

  const contact = new Contact({
    name,
    email,
    phone
  })

  contact.save()
          .then((result) => {
            res.send(result)
          }). catch((error) => {
            res.status(409).send({
              message: error.message
            })
          }) 
}

exports.findOne = (req, res) => {
  const id = req.params.id

  Contact.findById(id)
        .then((result) => {
          res.send(result)
        }). catch((error) => {
          res.status(409).send({
            message: error.message
          })
        })
}


exports.update = (req, res) => {
  const id = req.params.id

  Contact.findByIdAndUpdate(id, req.body)
          .then((result) => {
            if(!validator.isEmail(result.email)) {
              res.status(409).send({
                message: "Email is not valid"
              })
            }
            else if(!validator.isMobilePhone(result.phone, 'id-ID')) {
              res.status(409).send({
                message: "Phone number is not valid."
              })
            }
            else if(!result) {
              res.status(404).send({
                message: "Error respon is not found"
              })
            }
            else {
              res.send({
                message: "Contact Successfuly Updated"
              })
            }
          }).catch((error) => {
            res.status(409).send({
              message: error.message
            })
          })
}

exports.delete = (req, res) => {
  const id = req.params.id

  Contact.findByIdAndDelete(id, req.body)
          .then((result) => {
            res.send({
              message: "Contact Successfuly Deleted"
            })
          }). catch((error) => {
            res.status(409).send({
              message: error.message
            })
          })
}