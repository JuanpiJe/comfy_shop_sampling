const router = require('express').Router()
const usersAPIController = require('../controllers/usersAPIController')

router.get('/form-data', usersAPIController.formData)

module.exports = router