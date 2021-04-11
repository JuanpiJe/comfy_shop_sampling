module.exports = function (sequelize, dataTypes) {
    let alias = "ShopBrandCategory"
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        brand_category_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
        shop_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        }
    }
    let config = {
        tableName: 'shop_brand_category',
        timestamps: false,
    }
    const ShopBrandCategory = sequelize.define(alias, cols, config)

    ShopBrandCategory.associate = (models) => {
        ShopBrandCategory.belongsTo(models.BrandCategory, {
            as : 'brand_category',
            foreignKey : 'brand_category_id'
        })
        ShopBrandCategory.belongsTo(models.Shop, {
            as : 'shop',
            foreignKey : 'shop_id'
        })
    }
    return ShopBrandCategory
}