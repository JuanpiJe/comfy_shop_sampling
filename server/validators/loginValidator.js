const { check } = require('express-validator');
const db = require('../database/models')
const bcrypt = require ('bcryptjs')
const {Op} = require('sequelize')
module.exports = [
        check('username').not().isEmpty().withMessage('Debe ingresar un usuario').custom(async(username, {req})=>{
                                                                                         let userExist = await db.Shop.findOne({
                                                                                            where : {
                                                                                                [Op.or] : [{username : req.body.username}]
                                                                                            }
                                                                                         })
                                                                                            if (userExist == null){
                                                                                                    throw new Error ('El usuario es inexistente.')
                                                                                                }
                                                                                            else if (bcrypt.compareSync(req.body.password, userExist.password)==false){
                                                                                                    throw new Error ('Los datos ingresados no son válidos.')
                                                                                                }
                                                                                            }),
        check('password').notEmpty().withMessage('Campo requerido')
   ]