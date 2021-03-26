const router = require('express').Router()
const shopsAPIController = require('../controllers/shopsAPIController')

router.get('/:id', shopsAPIController.overview)
router.get('/:id/products', shopsAPIController.products)
router.get('/:id/categories', shopsAPIController.categories)
router.get('/:id/categories/:category', shopsAPIController.category)
router.get('/:id/surveys', shopsAPIController.surveys)
module.exports = router 