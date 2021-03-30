module.exports = function (sequelize, dataTypes) {
    let alias = "Brand"
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name : {
            type: dataTypes.STRING(45),
            allowNull: true,
            defaultValue : null
        },
        contact_name : {
            type: dataTypes.STRING(45),
            allowNull: true,
            defaultValue : null
        },
        province : {
            type: dataTypes.STRING(45),
            allowNull: true,
            defaultValue : null
        },
        city : {
            type: dataTypes.STRING(45),
            allowNull: true,
            defaultValue : null
        },
        address : {
            type: dataTypes.STRING(155),
            allowNull: true,
            defaultValue : null
        }
    }
    let config = {
        tableName: 'brand',
        timestamps: true,
        underscored: true,
        paranoid: true
    }
    const Brand = sequelize.define(alias, cols, config)

    Brand.associate = (models) => {
        Brand.hasMany(models.Product, {
            as : 'products',
            foreignKey : 'brand_id'
        })
        Brand.hasMany(models.BrandCollection, {
            as : 'collections',
            foreignKey : 'brand_id'
        })
        Brand.hasMany(models.BrandCategory, {
            as : 'categories',
            foreignKey : 'brand_id'
        })
        Brand.belongsToMany(models.Shop, {
            as : 'shops',
            through : 'shop_brand',
            foreignKey : 'brand_id',
            otherKey : 'shop_id',
            timestamps : false
        })
    }

    return Brand
}