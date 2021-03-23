module.exports = function (sequelize, dataTypes) {
    let alias = "CategorySizeMeassurements"
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        meassurement: {
            type: dataTypes.DECIMAL(5,2),
            allowNull: false
        },
        size_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        category_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        sub_category_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        meassurement_point_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    }
    let config = {
        tableName: 'category_size_meassurements',
        timestamps: true,
        underscored: true,
        paranoid: true
    }
    const CategorySizeMeassurements = sequelize.define(alias, cols, config)
    return CategorySizeMeassurements
}