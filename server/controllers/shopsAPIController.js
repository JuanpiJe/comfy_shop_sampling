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
    categories: async (req, res) => {
        try {
            let shopCategories = await db.Shop.findByPk(req.shop.id, {
                attributes: [],
                include: [
                    {
                        association: 'brands_categories', attributes: ['id'], include: [
                            { association: 'category' }
                        ]
                    }
                ]
            })
            var allCategories = []
            shopCategories.brands_categories.forEach((element, index, array) => {
                allCategories.push(element.category)
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
            let shopCategory = await db.Category.findOne({
                where: {
                    id: req.params.id
                },
                include: {
                    association: 'brands_categories', attributes: ['id'], include: [
                        { association: 'shops', where: { id: req.shop.id }, attributes: [] },
                        { association: 'gender' },
                        { association: 'brand', attributes: ['id', 'name'] },
                        { association: 'subcategory', attributes: ['id', 'name'] },
                        { association: 'model', attributes: ['id', 'name'] }
                    ]
                }
            })
            let response = {
                meta: {
                    status: 200,
                    url: `/api/shops/${req.shop.id}/category/${req.params.id}`
                },
                data: {
                    shopCategory
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
        let status = 'failed'
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            try {
                let shop = await db.Shop.findOne({
                    where: { username: req.body.username }
                })
                let token = jwt.sign({ id: shop.id }, process.env.TOKEN_SECRET);
                status = 'success'
                res.header('auth-token', token).send({
                    id: shop.id,
                    username: shop.username,
                    token,
                    status
                })
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
        }
        else return res.status(400).send({
            errors: errors.mapped(),
            status
        });
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
                shop: req.shop.id,
                category: {
                    id: 2,
                    name: 'Bermuda'
                },
                brand: {
                    id: 1,
                    name: 'Lacoste'
                },
                gender: {
                    id: 2,
                    name: 'Hombre'
                },
                subcategory: {
                    id: null,
                    name: null
                },
                model: {
                    id: null,
                    name: null
                },
                collection: {
                    id: 1,
                    name: 'Otoño/Invierno'
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
                        id: 2,
                        meassurementPointID: 2,
                        meassurement: 48
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
            //---------------------------------------------------//
            //------- Creating brand_category relationship ------//
            //---------------------------------------------------//

            //-------- First Case : Subcategory is null --------//

            if (data.subcategory.name === null) {
                let checkExists = await db.BrandCategory.findOne({
                    where: {
                        brand_id: data.brand.id,
                        category_id: data.category.id,
                        gender_id: data.gender.id
                    }
                })

                //-------- If brand_category not exists -> Create brand_category ---------//

                if (checkExists === null) {
                    let category = await db.Category.findByPk(data.category.id)
                    let brand = await db.Brand.findByPk(data.brand.id)
                    let brand_category_name = `${category.name} ${brand.name}`
                    let createBrandCategory = await db.BrandCategory.create({
                        name: brand_category_name,
                        brand_id: data.brand.id,
                        category_id: data.category.id,
                        gender_id: data.gender.id,
                        collection_id: data.collection.id
                    })
                    data.brand_category = {
                        id: createBrandCategory.id,
                        name: brand_category_name
                    }
                    let createShopBrandCategory = await db.ShopBrandCategory.create({
                        brand_category_id: data.brand_category.id,
                        shop_id: req.shop.id
                    })
                }
                //-------- If brand_category exists -> Relate brand_category with the shop if it´s not related ---------//
                else {
                    data.brand_category.id = checkExists.id
                    let checkExistsInShop = await db.ShopBrandCategory.findOne({
                        where: {
                            brand_category_id: data.brand_category.id,
                            shop_id: req.shop.id
                        }
                    })
                    if (checkExistsInShop === null) {
                        createShopBrandCategory = await db.ShopBrandCategory.create({
                            brand_category_id: data.brand_category.id,
                            shop_id: req.shop.id
                        })
                    }
                    return res.send({
                        meta: {
                            status: 200,
                        },
                        data: {
                            brand_category_id: data.brand_category.id,
                            success: true,
                            message: `Las medidas para ${data.brand_category.name} ya se encuentran resgistradas en nuestra base de datos, no hace falta que las cargues.`
                        }
                    })
                }
            }

            //-------- Second Case : Model is null --------//

            else if (data.model.name === null) {
                let checkExists = await db.BrandCategory.findOne({
                    where: {
                        brand_id: data.brand.id,
                        category_id: data.category.id,
                        gender_id: data.gender.id,
                        subcategory_id: data.subcategory.id
                    }
                })

                //-------- If brand_category not exists -> Create brand_category ---------//

                if (checkExists === null) {
                    let category = await db.Category.findByPk(data.category.id)
                    let brand = await db.Brand.findByPk(data.brand.id)
                    let subcategory = await db.Subcategory.findByPk(data.subcategory.id)
                    let brand_category_name = `${category.name} ${brand.name} ${subcategory.name}`
                    let createBrandCategory = await db.BrandCategory.create({
                        name: brand_category_name,
                        brand_id: data.brand.id,
                        category_id: data.category.id,
                        gender_id: data.gender.id,
                        subcategory_id: data.subcategory.id,
                        collection_id: data.collection_id
                    })
                    data.brand_category = {
                        id: createBrandCategory.id,
                        name: brand_category_name
                    }
                    let createShopBrandCategory = await db.ShopBrandCategory.create({
                        brand_category_id: data.brand_category.id,
                        shop_id: req.shop.id
                    })
                }

                //-------- If brand_category exists -> Relate brand_category with the shop if it´s not already related ---------//

                else {
                    data.brand_category.id = checkExists.id
                    let checkExistsInShop = await db.ShopBrandCategory.findOne({
                        where: {
                            brand_category_id: data.brand_category.id,
                            shop_id: req.shop.id
                        }
                    })
                    if (checkExistsInShop === null) {
                        createShopBrandCategory = await db.ShopBrandCategory.create({
                            brand_category_id: data.brand_category.id,
                            shop_id: req.shop.id
                        })
                    }
                    return res.send({
                        meta: {
                            status: 200,
                        },
                        data: {
                            success: true,
                            brand_category_id: data.brand_category.id,
                            message: `Las medidas para ${data.brand_category.name} ya se encuentran resgistradas en nuestra base de datos, no hace falta que las cargues.`
                        }
                    })
                }
            }

            //-------- Third Case : Having model and subcategory definition --------//            

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

                //-------- If brand_category not exists -> Create brand_category ---------//

                if (checkExists === null) {
                    let category = await db.Category.findByPk(data.category.id)
                    let brand = await db.Brand.findByPk(data.brand.id)
                    let subcategory = await db.Subcategory.findByPk(data.subcategory.id)
                    let model = await db.Model.findByPk(data.model.id)
                    let brand_category_name = `${category.name} ${brand.name} ${subcategory.name} ${model.name}`
                    let createBrandCategory = await db.BrandCategory.create({
                        name: brand_category_name,
                        brand_id: data.brand.id,
                        category_id: data.category.id,
                        gender_id: data.gender.id,
                        subcategory_id: data.subcategory.id,
                        model_id: data.model.id,
                        collection_id: data.collection_id
                    })
                    data.brand_category = {
                        id: createBrandCategory.id,
                        name: brand_category_name
                    }
                    let createShopBrandCategory = await db.ShopBrandCategory.create({
                        brand_category_id: data.brand_category.id,
                        shop_id: req.shop.id
                    })
                }

                //-------- If brand_category exists -> Relate brand_category with the shop if it´s not already related ---------//                

                else {
                    data.brand_category.id = checkExists.id
                    let checkExistsInShop = await db.ShopBrandCategory.findOne({
                        where: {
                            brand_category_id: data.brand_category.id,
                            shop_id: req.shop.id
                        }
                    })
                    if (checkExistsInShop === null) {
                        createShopBrandCategory = await db.ShopBrandCategory.create({
                            brand_category_id: data.brand_category.id,
                            shop_id: req.shop.id
                        })
                    }
                    return res.send({
                        meta: {
                            status: 200,
                        },
                        data: {
                            success: true,
                            message: `Las medidas para ${data.brand_category.name} ya se encuentran resgistradas en nuestra base de datos, no hace falta que las cargues.`,
                            brand_category_id: data.brand_category.id
                        }
                    })
                }
            }

            // ---------------------------------------------------------//
            // ---------------- Creating New Meassurements -------------//
            // ---------------------------------------------------------//

            data.sizes.forEach(size => {
                db.BrandCategorySizeMeassurement.create({
                    size_id: size.id,
                    meassurement_point_id: size.meassurementPointID,
                    brand_category_id: data.brand_category.id,
                    meassurement: size.meassurement,
                })
            })

            success = true
            let response = {
                meta: {
                    status: 201,
                },
                data: {
                    success,
                    message: `Las medidas para ${data.brand_category.name} fueron cargadas con éxito!`,
                    brand_category: data.brand_category
                }
            }
            res.send({
                response
            })
        } catch (error) {
            console.log(error);
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
                response: response.data
            })
        }
    }
}