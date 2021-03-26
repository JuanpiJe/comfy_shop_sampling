const router = require('express').Router()
const productsAPIController = require('../controllers/productsAPIController')

router.get('/categories', productsAPIController.categories)
router.get('/sizes', productsAPIController.sizes)
router.get('/genders', productsAPIController.genders)


module.exports = router