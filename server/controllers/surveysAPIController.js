const db = require('../database/models')
module.exports = {
    shopData: async (req, res) => {
        data = {
            gender: {
                id: 2,
                name: null
            }
        }
        try {
            let shopData = await db.BrandCategory.findAll({
                attributes: ['id', 'name'],
                required: true,
                include:
                    [
                        {
                            association: 'shops',
                            where: { id: req.shop.id },
                            attributes: []
                        },
                        {
                            association: 'gender',
                            where: { id: data.gender.id }
                        },
                        {
                            association: 'category',
                        },
                        {
                            association: 'subcategory'
                        },
                        {
                            association: 'brand',
                            attributes: ['id', 'name']
                        },
                        {
                            association: 'model'
                        },
                        {
                            association: 'collection'
                        }
                    ]
            })
            let response = {
                meta: {
                    status: 200,
                    url: `/api/surveys/shop_data`
                },
                data: {
                    shopData
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
                    errorMessage: 'Error de conexión con el servidor, por favor intente más tarde'
                }
            }
            console.log(error);
            return res.send(response.data)
        }
    },
    createUser: async (req, res) => {
        try {
            data = {
                email: 'testasa@gmail.com',
                gender: {
                    id: 1,
                    name: null
                },
                brand_category: [
                    {
                        id: 1,
                        name: null,
                        sizes: [1, 2]
                    },
                    {
                        id: 4,
                        name: null,
                        sizes: [2, 3]
                    }
                ]
            }

            let success = null

            //VERIFY EMAIL NOT EXIST

            let locateUser = await db.User.findOne({
                where: {
                    email: data.email
                },
                attributes: ['id', 'email']
            });

            // If email don´t exists, create a new user
            if (locateUser === null) {
                let createUser = await db.User.create({
                    email: data.email,
                    gender_id: data.gender.id
                })
                success = true

                //Creating a new survey

                let createSurvey = await db.Survey.create({
                    user_id: createUser.id,
                    shop_id: req.shop.id
                })

                //Response
                let response = {
                    meta: {
                        status: 200,
                        url: `/api/surveys/create_user`
                    },
                    data: {
                        success,
                        user: {
                            id: createUser.id,
                            email: createUser.email
                        },
                        survey_id: createSurvey.id
                    }
                }
                return res.send(response)
            }

            // If email exists, only allow the user to go on if there are less than 3 surveys with different categories 

            let brandsCategoriesToSubmit = []

            data.brand_category.forEach(element => {
                brandsCategoriesToSubmit.push(element.id)
            })

            let surveysCompletedByUser = await db.Survey.findAll({
                where: {
                    user_id: locateUser.id,
                },
                include: {
                    all: true
                }
            })
            let brandsCategoriesSubmitted = []
            surveysCompletedByUser.forEach(survey => {
                survey.users_feedbacks.forEach(feedback => {
                    brandsCategoriesSubmitted.push(feedback.brand_category_id)
                })
            })

            brandsCategoriesToSubmit = brandsCategoriesToSubmit.filter(val => !brandsCategoriesSubmitted.includes(val))//Removing Duplicates

            console.log(brandsCategoriesToSubmit);

            if (brandsCategoriesToSubmit.length == 0) {
                success = false
                return res.send({
                    success,
                    message: 'Ya posee encuestas sobre estos productos, por favor intenta con nuevos productos'
                })

            }
            success = true
            let createSurvey = await db.Survey.create({
                user_id: createUser.id,
                shop_id: req.shop.id
            })

            let response = {
                meta: {
                    status: 200,
                    url: `/api/surveys/create_user`
                },
                data: {
                    success,
                    user: {
                        id: createUser.id,
                        email: createUser.email
                    },
                    survey_id: createSurvey.id
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
                    errorMessage: 'Error de conexión con el servidor, por favor intente más tarde'
                }
            }
            console.log(error);
            return res.send(response.data)
        }
    },
    saveUserBasicData: async (req, res) => {
        try {
            let data = {
                user: {
                    id: 1,
                    email: 'test@gmail.com',
                    gender_id: 2,
                    height: 185,
                    weight: 76,
                    age: 23,
                    bra_size_id: null
                }
            }

            let user = await db.User.findByPk(data.user.id)
            user.height = data.user.height
            user.weight = data.user.weight
            user.age = data.user.age
            user.bra_size_id = data.user.bra_size_id
            user.bmi = Math.round(data.user.weight / (Math.pow((data.user.height / 100), 2))),
            await user.save()
            let response = {
                meta: {
                    status: 200,
                    url: `/api/surveys/save_basic_data`
                },
                data: {
                    success : true
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
                    errorMessage: 'Error de conexión con el servidor, por favor intente más tarde'
                }
            }
            return res.send(response)
        }
    },
    saveUserPreferences: async (req, res) => {
        try {
            let data = {
                user: {
                    id: 1,
                    email: null,
                    gender_id: null,
                    height: null,
                    weight: null,
                    age: null,
                    bra_size_id: null
                },
                fit_preference: {
                    preference_id: 1,
                    category_id: 2
                }
            }
            let saveUserPreferences = await db.UserCategoryFitPreference.create({
                user_id: data.user.id,
                preference_id: data.fit_preference.preference_id,
                category_id: data.fit_preference.category_id
            })
            let response = {
                meta: {
                    status: 200,
                    url: `/api/surveys/save_user_preferences`
                },
                data: {
                    success : true
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
                    errorMessage: 'Error de conexión con el servidor, por favor intente más tarde'
                }
            }
            console.log(error);
            return res.send(response.data)
        }
    },
    saveFeedback: async (req, res) => {
        try {
            data = {
                user: {
                    id: 1,
                    email: 'test@gmail.com'
                },
                brand_category_id : 1,
                size_id: 1,
                body_part_id: 2,
                rating_id: 3,
                survey_id : 1
            }
            let saveFeedback = await db.UserFeedback.create({
                user_id: data.user.id,
                survey_id: data.survey_id,
                brand_category_id: data.brand_category_id,
                size_id: data.size_id,
                body_part_id: data.body_part_id,
                rating_id: data.rating_id
            })
            let success = true
            let response = {
                meta: {
                    status: 200,
                    url: `/api/surveys/save_feedback`
                },
                data: {
                    success,
                    messageTitle: 'Tu encuesta fue registrada con éxito',
                    messageDescription: 'Muchas gracias por participar!'
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
                    errorMessage: 'Error de conexión con el servidor, por favor intente más tarde'
                }
            }
            console.log(error);
            return res.send(response.data)
        }
    }
}