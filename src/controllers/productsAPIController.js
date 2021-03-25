const db = require('../database/models')
module.exports = {
    categories: async (req, res) => {
        try {
            let categories = await db.Category.findAll()
            let response = {
                meta: {
                    status: 200,
                    url: 'api/products/categories'
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
            return res.send(response)
        }
    },
    sizes: async (req, res) => {
        try {
            let sizes = await db.Size.findAll()
            let response = {
                meta: {
                    status: 200,
                    url: 'api/products/sizes'
                },
                data: {
                    sizes
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
            return res.send(response)
        }
    },
    genders: async (req, res) => {
        try {
            let genders = await db.Gender.findAll()
            let response = {
                meta: {
                    status: 200,
                    url: 'api/products/genders'
                },
                data: {
                    genders
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
            return res.send(response)
        }
    }
}