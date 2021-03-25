const db = require('../database/models')
module.exports = {
    overview: async (req, res) => {
        try {
            let shops = await db.Shop.findAll({
                where : {
                    id : req.params.id
                },
                include : {
                    all : true
                }
            })
            let response = {
                meta: {
                    status: 200,
                    url: `api/shops/${req.params.id}`
                },
                data: {
                    shops
                }
            }
            return res.send(response)
        }
        catch (error) {
            let response = {
                meta: {
                    status: 500,
                    error
                },
                data: {
                    errorMessage: 'Error de conexión con los servidores, por favor intente más tarde'
                }
            }
            console.log(error);
            return res.send(response)
        }
    },
    categories: async (req, res) => {
        try {
            let categories = await db.Shop.findAll({
                where : {
                    id : req.params.id
                },
                include : {
                    all : true
                }
            })
            let response = {
                meta: {
                    status: 200,
                    url: `api/categories/${req.params.id}`
                },
                data: {
                    categories
                }
            }
            return res.send(response)
        }
        catch (error) {
            let response = {
                meta: {
                    status: 500,
                    error
                },
                data: {
                    errorMessage: 'Error de conexión con los servidores, por favor intente más tarde'
                }
            }
            console.log(error);
            return res.send(response)
        }
    }
}