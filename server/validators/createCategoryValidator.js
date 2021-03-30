const { check } = require('express-validator');
module.exports = [
        check('gender').not().isEmpty().withMessage('Campo obligatorio'),
        check('category').not().isEmpty().withMessage('Campo obligatorio')
   ]