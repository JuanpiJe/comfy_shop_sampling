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
        tableName: 'subcategory',
        timestamps : false
    }
    const SubCategory = sequelize.define(alias, cols, config)
    
    SubCategory.associate = (models) => {
        SubCategory.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'subcategory_id'
        })
        SubCategory.hasMany(models.BrandCategory, {
            as: 'brand_categories',
            foreignKey: 'subcategory_id'
        })
        SubCategory.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'category_id'
        })
    }

    return SubCategory
}