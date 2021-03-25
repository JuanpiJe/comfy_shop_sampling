const db = require('../database/models')
module.exports = {
    formData: async (req, res) => {
        try {
            let preferences = await db.Preference.findAll({
                attributes: ['id', 'value', 'name_es']
            })
            let bodyParts = await db.BodyPart.findAll({
                attributes: ['id', 'name_es']
            })
            let bodyTypes = await db.BodyShapeType.findAll({
                attributes: ['id', 'name_es']
            })
            let rating = await db.Rating.findAll({
                attributes: ['id', 'value', 'name_es']
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
            return res.send(response)
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
    }
}