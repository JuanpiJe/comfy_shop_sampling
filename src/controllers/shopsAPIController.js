const db = require('../database/models')
const fetch = require('node-fetch')
module.exports = {
    overview: async (req, res) => {
        try {
            let shops = await db.Shop.findByPk(req.params.id, {
                include: {
                    all: true
                }
            })
            let response = {
                meta: {
                    status: 200,
                    url: `/api/shops/${req.params.id}`
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
    products: async (req, res) => {
        try {
            let shopProducts = await db.Shop.findByPk(req.params.id, {
                attributes: [],
                include: [
                    { association: 'products', include: [{ association: 'category' }] }
                ]
            })
            let response = {
                meta: {
                    status: 200,
                    url: `/api/shops/${req.params.id}/products`
                },
                data: {
                    total: shopProducts.products.length,
                    shopProducts: shopProducts.products,
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
            let shopProducts = await db.Shop.findByPk(req.params.id, {
                attributes: [],
                include: [
                    { association: 'products', include: [{ association: 'category' }] }
                ]
            })
            let allCategories = []
            shopProducts.products.forEach((product, index, array) => {
                allCategories.push(product.category)
            })
            let uniqueCategories = Array.from(new Set(allCategories.map(a => a.id)))
                .map(id => {
                    return allCategories.find(a => a.id === id)
                })
            let response = {
                meta: {
                    status: 200,
                    url: `/api/shops/${req.params.id}/categories`
                },
                data: {
                    total: uniqueCategories.length,
                    categories: uniqueCategories
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
    category: async (req, res) => {
        try {
            let shopProducts = await db.Shop.findByPk(req.params.id, {
                attributes: [],
                include: [
                    { association: 'products', include: [{ association: 'category', where : {id : req.params.category}, attributes : []}]}
                ]
            })
            let total = shopProducts.products.length
            let category = await db.Category.findByPk (req.params.category)
            let response = {
                meta: {
                    status: 200,
                    url: `/api/shops/${req.params.id}/category/${req.params.category}`
                },
                data: {
                    total,
                    category,
                    shopProducts: shopProducts.products,
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
            return res.send(req.params.category)
        }
    },
    surveys: async (req, res) => {
        try {
            let surveys = await db.Survey.findByPk(req.params.id, {
                attributes: ['id', 'user_id'],
                include: [
                    { association: 'user', attributes: ['email'] },
                    { association: 'users_feedbacks', attributes: ['id', 'product_id'] }
                ]
            })
            let response = {
                meta: {
                    status: 200,
                    url: `/api/surveys/${req.params.id}`
                },
                data: {
                    total: surveys.length,
                    surveys
                }
            }
            return res.json(response)
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