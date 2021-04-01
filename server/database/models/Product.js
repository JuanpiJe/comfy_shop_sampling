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

    Product.associate = (models) => {
        Product.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'category_id'
        })
        Product.belongsTo(models.Subcategory, {
            as: 'subcategory',
            foreignKey: 'subcategory_id'
        })
        Product.belongsTo(models.Brand, {
            as: 'brand',
            foreignKey: 'brand_id'
        })
        Product.belongsTo(models.BrandCollection, {
            as: 'brand_collection',
            foreignKey: 'brand_collection_id'
        })
        Product.hasMany(models.UserFeedback, {
            as: 'users_feedbacks',
            foreignKey: 'product_id'
        })
        Product.belongsToMany(models.Size, {
            as: 'sizes',
            through: 'product_size',
            foreignKey: 'product_id',
            otherKey: 'size_id',
            timestamps: false
        })
        Product.belongsToMany(models.Shop, {
            as: 'shops',
            through: 'shop_product',
            foreignKey: 'product_id',
            otherKey: 'shop_id',
            timestamps: false
        }),
        Product.belongsTo(models.Gender, {
            as: 'gender',
            foreignKey: 'gender_id',
        })
    }

    return Product
}