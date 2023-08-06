module.exports = (mongoose) => {
  const schema = mongoose.Schema({
    name: String,
    email: String,
    phone: String
  },
  
  {timestamps: true}
  )

  schema.method("toJSON", function() {
    const {__v, _id, ...object} = this.toObject()
    object.id = _id
    return object
  })

  const Contact = mongoose.model("contacts", schema)
  return Contact
}