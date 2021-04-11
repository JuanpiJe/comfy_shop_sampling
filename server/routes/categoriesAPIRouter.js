const router = require('express').Router()
const categoriesAPIController = require('../controllers/categoriesAPIController')

router.get('/', categoriesAPIController.categories)
router.get('/sizes', categoriesAPIController.sizes)
router.get('/genders', categoriesAPIController.genders)


module.exports = router