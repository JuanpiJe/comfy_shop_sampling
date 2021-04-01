module.exports = function (sequelize, dataTypes) {
    let alias = "Rating"
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        value : {
            type: dataTypes.STRING(4),
            allowNull : true,
            defaultValue : null
        },
        name: {
            type: dataTypes.STRING,
            allowNull: true,
            defaultValue: null
        },
        name_en: {
            type: dataTypes.STRING,
            allowNull: true,
            defaultValue: null
        }
    }
    let config = {
        tableName: 'rating',
        timestamps : false
    }
    const Rating = sequelize.define(alias, cols, config)

    Rating.associate = (models) => {
        Rating.hasMany(models.UserFeedback, {
            as : 'user_feedback',
            foreignKey : 'rating_id'
        })
    }

    return Rating
}