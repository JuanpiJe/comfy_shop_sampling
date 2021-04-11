const db = require('../database/models')
module.exports = {
    formData: async (req, res) => {
        try {
            let preferences = await db.Preference.findAll({
                attributes: ['id', 'value', 'name']
            })
            let bodyParts = await db.BodyPart.findAll({
                attributes: ['id', 'name']
            })
            let bodyTypes = await db.BodyShapeType.findAll({
                attributes: ['id', 'name']
            })
            let rating = await db.Rating.findAll({
                attributes: ['id', 'value', 'name']
            })
            let braSize = await db.BraSize.findAll({
                attributes: ['id', 'value']
            })
            let response = {
                meta: {
                    status: 200,
                    url: '/users/form-data'
                },
                data: {
                    metrics: {
                        height: 'cm',
                        weight: 'kg',
                        year: 'años'
                    },
                    preferences,
                    bodyParts,
                    bodyTypes,
                    rating,
                    braSize
                }
            }
            return res.send(response.data)
        }
        catch (error){
            let response = {
                meta : {
                    status : 500,
                    error
                },
                data : {
                    errorMessage : 'Error de conexión con los servidores, por favor intente más tarde'
                }
            }
            return response
        }
    },
    formCreate : async (req, res)=> {
        try {
            let data = {
                email : null,
                gender : null,                
                weight : null,
                height : null,
                age : null,
                bmi : null,
                bra_size : null,
                user_category_fit_preference : [
                    {
                        preference_id : null,
                        category_id : null
                    },
                    {
                        preference_id : null,
                        category_id : null
                    }
                ],
                user_body_shape : [
                    {
                        body_shape_type_id : null,
                        body_part_id : null
                    },
                    {
                        body_shape_type_id : null,
                        body_part_id : null
                    },
                    {
                        body_shape_type_id : null,
                        body_part_id : null
                    }
                ],
                user_feedback : [
                    {
                        brand_category_id : null,
                        body_part_id : null,
                        rating_id : null,
                        survey_id : null
                    },
                    {
                        brand_category_id : null,
                        body_part_id : null,
                        rating_id : null,
                        survey_id : null
                    }
                ]
            }
            
            

        }
        catch {

        }
    },

}