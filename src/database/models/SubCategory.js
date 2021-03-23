module.exports = function (sequelize, dataTypes) {
    let alias = "SubCategory"
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name_es: {
            type: dataTypes.STRING,
            allowNull: true,
            defaultValue: null
        },
        category_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
        }
    }
    let config = {
        tableName: 'rating',
        timestamps : false
    }
    const Rating = sequelize.define(alias, cols, config)
    return Rating
}