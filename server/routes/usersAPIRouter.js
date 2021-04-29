const router = require('express').Router()
const usersAPIController = require('../controllers/usersAPIController')

router.get('/form', usersAPIController.formData)
router.post('/form', usersAPIController.formCreate)

module.exports = router