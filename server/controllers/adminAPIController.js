const db = require('../database/models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
module.exports = {
    //---------------------------------------------------------------------//
    //------------------ Admin POST Requests Controllers ------------------//
    //---------------------------------------------------------------------//
    shopRegister: async (req, res) => {
        try {
            let shop = await db.Shop.create({
                name: req.body.name,
                username: req.body.username,
                password: bcrypt.hashSync(req.body.password, 10),
                contact_number : req.body.contact_number,
                contact_name: req.body.contact_name,
                province: req.body.province,
                city: req.body.city,
                address: req.body.address
            })
            let response = {
                id : shop.id,
                name : shop.name
            }
            res.status(200).send(response)
        }
        catch (error) {
            res.status(400).send(error)
        }
    }
}