module.exports = function (sequelize, dataTypes) {
    let alias = "Shop"
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            defaultValue : null
        },
        name : {
            type : dataTypes.STRING(45),
            allowNull : true,
            defaultValue : null
        },
        username : {
            type : dataTypes.STRING(45),
            allowNull : true,
            defaultValue : null
        },
        password : {
            type : dataTypes.STRING(255),
            allowNull : true,
            defaultValue : null
        },
        contact_number : {
            type : dataTypes.STRING(45),
            allowNull : true,
            defaultValue : null
        },
        contact_name : {
            type : dataTypes.STRING(45),
            allowNull : true,
            defaultValue : null
        },
        province : {
            type : dataTypes.STRING(45),
            allowNull : true,
            defaultValue : null
        },
        city : {
            type : dataTypes.STRING(45),
            allowNull : true,
            defaultValue : null
        },
        address : {
            type : dataTypes.STRING(155),
            allowNull : true,
            defaultValue : null
        }
    }
    let config = {
        tableName: 'shop',
        timestamps: true,
        underscored: true,
        paranoid: true
    }
    const Shop = sequelize.define(alias, cols, config)

    Shop.associate = (models) => {
        Shop.belongsToMany(models.Product, {
            as: 'products',
            through: 'shop_product',
            foreignKey: 'shop_id',
            otherKey: 'product_id',
            timestamps: false
        })
        Shop.belongsToMany(models.Brand, {
            as: 'brands',
            through: 'shop_brand',
            foreignKey: 'shop_id',
            otherKey: 'brand_id',
            timestamps: false
        }),
        Shop.hasMany(models.Survey, {
            as : 'surveys',
            foreignKey : 'shop_id'
        })
    }

    return Shop
}