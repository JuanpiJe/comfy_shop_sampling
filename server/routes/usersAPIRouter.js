const router = require('express').Router()
const usersAPIController = require('../controllers/usersAPIController')

router.get('/user/form', usersAPIController.formData)
router.post('/user/form', usersAPIController.formCreate)

module.exports = router