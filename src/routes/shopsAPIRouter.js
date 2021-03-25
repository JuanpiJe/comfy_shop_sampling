const router = require('express').Router()
const shopsAPIController = require('../controllers/shopsAPIController')

router.post('/:id', shopsAPIController.overview)
router.get('/:id/categories', shopsAPIController.overview)
router.get('/:id/categories/:id', shopsAPIController.overview)

module.exports = router