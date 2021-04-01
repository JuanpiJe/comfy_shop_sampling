module.exports = function (sequelize, dataTypes) {
    let alias = "ShopBrand"
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        brand_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
        shop_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        }
    }
    let config = {
        tableName: 'shop_brand',
        timestamps: false,
    }
    const ShopBrand = sequelize.define(alias, cols, config)
    return ShopBrand
}