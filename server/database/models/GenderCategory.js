module.exports = function (sequelize, dataTypes) {
    let alias = "GenderCategory"
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        category_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
        gender_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        }
    }
    let config = {
        tableName: 'gender_category',
        timestamps: false,
    }
    const GenderCategory = sequelize.define(alias, cols, config)
    return GenderCategory
}