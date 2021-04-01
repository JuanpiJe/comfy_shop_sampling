module.exports = function (sequelize, dataTypes) {
    let alias = "BrandCategory"
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
        category_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
        gender_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
        subcategory_id: {
            type: dataTypes.INTEGER(11),
            allowNull: true,
        },
        model_id: {
            type: dataTypes.INTEGER(11),
            allowNull: true,
        },
        collection_id: {
            type: dataTypes.INTEGER(11),
            allowNull: true,
        }
    }
    let config = {
        tableName: 'brand_category',
        timestamps: true,
        underscored: true,
        paranoid: true
    }
    const BrandCategory = sequelize.define(alias, cols, config)

    BrandCategory.associate = (models) => {
        BrandCategory.belongsTo(models.Category, {
            as : 'category',
            foreignKey : 'category_id'
        })
        BrandCategory.belongsTo(models.Gender, {
            as : 'gender',
            foreignKey : 'gender_id'
        })
        BrandCategory.belongsTo(models.Subcategory, {
            as : 'subcategory',
            foreignKey : 'subcategory_id'
        })
        BrandCategory.belongsTo(models.Brand, {
            as : 'brand',
            foreignKey : 'brand_id'
        })
        BrandCategory.belongsTo(models.Model, {
            as : 'model',
            foreignKey : 'model_id'
        })
        BrandCategory.belongsTo(models.Collection, {
            as : 'collection',
            foreignKey : 'collection_id'
        })
        BrandCategory.hasMany(models.BrandCategorySizeMeassurement, {
            as : 'size_meassurement',
            foreignKey : 'brand_category_id'
        })
    }

    return BrandCategory
}