const db = require('../database/models')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator');
const { Op, Model } = require('sequelize')

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
                },
                attributes: { exclude: ['password'] }
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
                    { association: 'products', include: [{ association: 'category', where: { id: req.params.category }, attributes: [] }] },
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
                    url: `shops/api/create-view`
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
        } catch (error) {
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

    //------------------ Post data format to work with ------------------//

    createCategoryPost: async (req, res) => {
        //---------------------------------------------------------//
        //------------------ Creating New Entrys ------------------//
        //---------------------------------------------------------//

        let exists = (model) => {
            if (model.id === null && model.name !== null) {
                return false
            } else return true
        }
        let sucess = null
        try {
            let data = {
                shop : req.shop.id,
                category: {
                    id: 118,
                    name: 'CategoriaDePrueba2'
                },
                brand: {
                    id: 105,
                    name: 'test1'
                },
                gender: {
                    id: 2,
                    name: 'Mujer'
                },
                subcategory: {
                    id: 57,
                    name: 'Mangas Cortas'
                },
                model: {
                    id: 54,
                    name: 'Slim Fit'
                },
                sizes: [
                    {
                        id: 1,
                        meassurementPointID: 1,
                        meassurement: 25
                    },
                    {
                        id: 2,
                        meassurementPointID: 3,
                        meassurement: 24
                    },
                    {
                        id: 3,
                        meassurementPointID: 4,
                        meassurement: 70
                    }
                ]
            }
            //------------------ Creating if not exists ------------------//

            //------------------ Creating brand ------------------//

            if (exists(data.brand) == false) {
                var createBrand = await db.Brand.create({
                    name: data.brand.name
                })
                data.brand.id = createBrand.id
                let createShopBrand = await db.ShopBrand.create({
                    shop_id: req.shop.id,
                    brand_id: data.brand.id
                })
            }


            //------------------ Creating category ------------------//

            if (exists(data.category) == false) {
                var createCategory = await db.Category.create({
                    name: data.category.name
                })
                data.category.id = createCategory.id

                //------- Assigning  gender to new category created ------//
                var createGenderCategory = await db.GenderCategory.create({
                    gender_id: data.gender.id,
                    category_id: data.category.id
                })
            }

            //------------------ Creating subcategory ------------------//

            if (exists(data.subcategory) == false) {
                var createSubcategory = await db.Subcategory.create({
                    name: data.subcategory.name,
                    category_id: data.category.id
                })
                data.subcategory.id = createSubcategory.id
            }

            //------------------ Creating model ------------------//

            if (exists(data.model) == false) {
                var createModel = await db.Model.create({
                    name: data.model.name,
                    subcategory_id: data.subcategory.id,
                    category_id: data.category.id
                })
                data.model.id = createModel.id
            }

            //------- Creating brand_category relationship ------//

            if (data.subcategory.name === null) {
                let checkExists = await db.BrandCategory.findOne({
                    where: {
                        brand_id: data.brand.id,
                        category_id: data.category.id,
                        gender_id: data.gender.id
                    }
                })
                if (checkExists === null) {
                    let createBrandCategory = await db.BrandCategory.create({
                        brand_id: data.brand.id,
                        category_id: data.category.id,
                        gender_id: data.gender.id
                    })
                    data.brand_category_id = createBrandCategory.id
                }
                else {
                    data.brand_category_id = checkExists.id
                }
            }
            else if (data.model.name === null) {
                let checkExists = await db.BrandCategory.findOne({
                    where: {
                        brand_id: data.brand.id,
                        category_id: data.category.id,
                        gender_id: data.gender.id,
                        subcategory_id: data.subcategory.id
                    }
                })
                if (checkExists === null) {
                    let createBrandCategory = await db.BrandCategory.create({
                        brand_id: data.brand.id,
                        category_id: data.category.id,
                        gender_id: data.gender.id,
                        subcategory_id: data.subcategory.id
                    })
                        data.brand_category_id = createbrandcategory.id
                }
                else {
                    data.brand_category_id = checkExists.id
                }
                console.log(data)
            }
            else {
                let checkExists = await db.BrandCategory.findOne({
                    where: {
                        brand_id: data.brand.id,
                        category_id: data.category.id,
                        gender_id: data.gender.id,
                        subcategory_id: data.subcategory.id,
                        model_id: data.model.id
                    }
                })
                if (checkExists === null) {
                    let createBrandCategory = await db.BrandCategory.create({
                        brand_id: data.brand.id,
                        category_id: data.category.id,
                        gender_id: data.gender.id,
                        subcategory_id: data.subcategory.id,
                        model_id: data.model.id
                    })
                        data.brand_category_id = createbrandcategory.id
                }
                else {
                    data.brand_category_id = checkExists.id
                }
                console.log(data)
            }

            // ---------------------------------------------------------//
            // ---------------- Creating New Meassurements -------------//
            // ---------------------------------------------------------//

            data.sizes.forEach(size => {
                db.BrandCategorySizeMeassurement.create({
                    size_id: size.id,
                    meassurement_point_id: size.meassurementPointID,
                    brand_category_id: data.brand_category_id,
                    meassurement: size.meassurement,
                })
            })
            
            success = true
            let response = {
                meta : {
                    status : 200,
                },
                data : {
                    success,
                    message : 'Medidas creadas con éxito!'
                }
            }
            res.send({
                response
            })
        } catch (error) {
            let response = {
                meta: {
                    status: 400,
                    error
                },
                data: {
                    errorMessage: 'Bad Request'
                }
            }
            sucess = false
            return res.send({
                sucess,
                response : response.data})
        }
    }
}