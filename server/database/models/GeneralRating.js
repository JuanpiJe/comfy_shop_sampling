module.exports = function (sequelize, dataTypes) {
    let alias = "GeneralRating"
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: true,
            defaultValue: null
        },
        label: {
            type: dataTypes.STRING,
            allowNull: true,
            defaultValue: null
        }
    }
    let config = {
        tableName: 'general_rating',
        timestamps: false
    }    

    const GeneralRating = sequelize.define(alias, cols, config)

    GeneralRating.associate = (models) => {
        GeneralRating.hasMany(models.UserFeedback, {
            as : 'feedbacks',
            foreignKEy : 'general_rating_id'
        })
    }

    return GeneralRating
}