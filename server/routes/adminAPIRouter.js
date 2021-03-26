const router = require('express').Router()
const adminAPIController = require('../controllers/adminAPIController')

router.post('/shop-register', adminAPIController.shopRegister)
module.exports = router