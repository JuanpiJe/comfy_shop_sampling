const router = require('express').Router()
const apiController = require ('../controllers/apiController')
 
router.get('/talles', apiController.talles )

module.exports = router