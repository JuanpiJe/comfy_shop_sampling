const router = require('express').Router()
const surveysAPIController = require('../controllers/surveysAPIController')
const verifyToken = require('../middlewares/verifyToken')


router.post('/shop_data', verifyToken ,surveysAPIController.shopData )
router.post('/create_user', verifyToken, surveysAPIController.createUser)
router.post('/save_basic_data', verifyToken, surveysAPIController.saveUserBasicData)
router.post('/save_user_preferences', verifyToken, surveysAPIController.saveUserPreferences)
router.post('/save_feedback', verifyToken, surveysAPIController.saveFeedback)

module.exports = router