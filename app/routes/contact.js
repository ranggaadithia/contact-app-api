module.exports = (app) => {
  const contactController = require('../controllers/contact')
  const router = require('express').Router()

  router.get('/', contactController.findAll)
  router.post('/', contactController.create)
  router.get('/:id', contactController.findOne)
  router.put('/:id', contactController.update)
  router.delete('/:id', contactController.delete)

  app.use('/api/contacts', router)
}