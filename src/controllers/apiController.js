const db = require('../database/models')
require('../database/associations')

module.exports = {
    talles : async (req, res) => {
        let talles = await db.Size.findAll({
            include : {
                all : true
            }
        })
        res.send(talles)
    }
}