const db = require('../database/models')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator');
require('dotenv').config()
module.exports = {
    //---------------------------------------------------------------------//
    //------------------ Shops GET Requests Controllers -------------------//
    //---------------------------------------------------------------------//
    overview: async (req, res) => {
        try {
            let shops = await db.Shop.findByPk(req.shop.id, {
                include: {
                    all: true
                }
            })
            let response = {
                meta: {
                    status: 200,
                    url: `/api/shops/${req.shop.id}`
                },
                data: {
                    shop: shops
                }
            }
            return res.send(response.data)
        }
        catch (error) {
            let response = {
                meta: {
                    status: 500,
                    error
                },
                data: {
                    errorMessage: 'Error de conexión con el servidor, por favor intente más tarde'
                }
            }
            console.log(error);
            return res.send(response.data)
        }
    },
    products: async (req, res) => {
        try {
            let shopProducts = await db.Shop.findByPk(req.shop.id, {
                attributes: [],
                include: [
                    { association: 'products', include: [{ association: 'category' }] }
                ]
            })
            let response = {
                meta: {
                    status: 200,
                    url: `/api/shops/${req.shop.id}/products`
                },
                data: {
                    total: shopProducts.products.length,
                    shopProducts: shopProducts.products,
                }
            }
            return res.send(response.data)
        }
        catch (error) {
            let response = {
                meta: {
                    status: 500,
                    error
                },
                data: {
                    errorMessage: 'Error de conexión con el servidor, por favor intente más tarde'
                }
            }
            console.log(error);
            return res.send(response.data)
        }
    },
    categories: async (req, res) => {
        try {
            let shopProducts = await db.Shop.findByPk(req.shop.id, {
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
                    url: `/api/shops/${req.shop.id}/categories`
                },
                data: {
                    total: uniqueCategories.length,
                    categories: uniqueCategories
                }
            }
            return res.send(response.data)
        }
        catch (error) {
            let response = {
                meta: {
                    status: 500,
                    error
                },
                data: {
                    errorMessage: 'Error de conexión con el servidor, por favor intente más tarde'
                }
            }
            console.log(error);
            return res.send(response.data)
        }
    },
    category: async (req, res) => {
        try {
            let shopProducts = await db.Shop.findByPk(req.shop.id, {
                attributes: [],
                include: [
                    { association: 'products', include: [{ association: 'category', where: { id: req.params.category }, attributes: [] }] }
                ]
            })
            let total = shopProducts.products.length
            let category = await db.Category.findByPk(req.params.category)
            let response = {
                meta: {
                    status: 200,
                    url: `/api/shops/${req.shop.id}/category/${req.params.category}`
                },
                data: {
                    total,
                    category,
                    products: shopProducts.products,
                }
            }
            return res.send(response.data)
        }
        catch (error) {
            let response = {
                meta: {
                    status: 500,
                    error
                },
                data: {
                    errorMessage: 'Error de conexión con el servidor, por favor intente más tarde'
                }
            }
            console.log(error);
            return res.send(response.data)
        }
    },
    surveys: async (req, res) => {
        try {
            let surveys = await db.Shop.findByPk(req.shop.id, {
                attributes: [],
                include: [
                    { association: 'surveys' }]
            })
            let response = {
                meta: {
                    status: 200,
                    url: `/api/surveys/${req.shop.id}`
                },
                data: {
                    total: surveys.surveys.length,
                    surveys: surveys.surveys
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
                    errorMessage: 'Error de conexión con el servidor, por favor intente más tarde'
                }
            }
            console.log(error);
            return res.send(response.data)
        }
    },
    createCategoryView: async (req, res) => {
        try {
            let brands = await db.Brand.findAll({
                attributes: ['id', 'name'],
                include: [{ association: 'shops', where: { id: req.shop.id }, attributes: [] }]
            })
            genders = await db.Gender.findAll()
            categories = await db.Category.findAll()
            sizes = await db.Size.findAll()
            meassurementPoints = await db.MeassurementPoint.findAll()
            let response = {
                meta: {
                    status: 200,
                    url: `/api/create-view`
                },
                data: {
                    brands,
                    genders,
                    categories,
                    sizes,
                    meassurementPoints
                }
            }
            return res.json(response)
        } catch (errors) {
            let response = {
                meta: {
                    status: 500,
                    error
                },
                data: {
                    errorMessage: 'Error de conexión con el servidor, por favor intente más tarde'
                }
            }
            console.log(error);
            return res.send(response.data)
        }
    },
    //---------------------------------------------------------------------//
    //------------------ Shops POST Requests Controllers ------------------//
    //---------------------------------------------------------------------//
    login: async (req, res) => {
        // res.send(req.body.username)
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            let shop = await db.Shop.findOne({
                where: { username: req.body.username }
            })
            let token = jwt.sign({ id: shop.id }, process.env.TOKEN_SECRET);
            res.header('auth-token', token).send(token)
        }
        else return res.status(400).send(errors.mapped())
    },
    createCategoryPost : async (req, res) => {
        
    }
}