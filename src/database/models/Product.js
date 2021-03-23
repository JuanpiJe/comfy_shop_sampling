module.exports = function (sequelize, dataTypes) {
    let alias = "Product"
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        sku : {
            type: dataTypes.INTEGER(11),
            allowNull : true,
            defaultValue : null
        },
        name : {
            type: dataTypes.STRING,
            allowNull : true,
            defaultValue : null
        },
        image : {
            type: dataTypes.STRING,
            allowNull : true,
            defaultValue : null
        },
        category_id : {
            type: dataTypes.INTEGER(11),
            allowNull : false,
        },
        subcategory_id : {
            type: dataTypes.INTEGER(11),
            allowNull : true,
            defaultValue : null
        },
        brand_id : {
            type: dataTypes.INTEGER(11),
            allowNull : false,
        },
        brand_collection_id : {
            type: dataTypes.INTEGER(11),
            allowNull : false,
        }
    }
    let config = {
        tableName: 'product',
        timestamps: true,
        underscored: true,
        paranoid: true
    }
    const Product = sequelize.define(alias, cols, config)
    return Product
}