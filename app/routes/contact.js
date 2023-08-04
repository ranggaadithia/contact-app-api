module.exports = (app) => {
  const posts = require('../controllers/contact')
  const router = require('express').Router()

  router.get('/', posts.findAll)

  app.use('/api/contacts', router)
}