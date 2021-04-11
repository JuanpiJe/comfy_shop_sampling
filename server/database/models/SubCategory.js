module.exports = function (sequelize, dataTypes) {
    let alias = "Subcategory"
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
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
    const Subcategory = sequelize.define(alias, cols, config)
    
    Subcategory.associate = (models) => {
        Subcategory.hasMany(models.BrandCategory, {
            as: 'brand_categories',
            foreignKey: 'subcategory_id'
        })
        Subcategory.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'category_id'
        })
    }

    return Subcategory
}