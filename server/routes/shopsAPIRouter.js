const router = require('express').Router()
const shopsAPIController = require('../controllers/shopsAPIController')
const loginValidator = require ('../validators/loginValidator')
const verifyToken = require('../middlewares/verifyToken')
const createCategoryValidator = require('../validators/createCategoryValidator')

router.post('/login', loginValidator, shopsAPIController.login)
router.post('/create-category', verifyToken, shopsAPIController.createCategoryPost)
router.get('/create-category', verifyToken, shopsAPIController.createCategoryView)
router.get('/overview', verifyToken ,shopsAPIController.overview)
router.get('/categories', verifyToken ,shopsAPIController.categories)
router.get('/categories/:id', verifyToken ,shopsAPIController.category)
router.get('/surveys', verifyToken , shopsAPIController.surveys)

module.exports = router