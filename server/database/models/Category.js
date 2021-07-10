module.exports = function (sequelize, dataTypes) {
    let alias = "Category"
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
        name_plural: {
            type: dataTypes.STRING,
            allowNull: true,
            defaultValue: null
        },
        name_gender: {
            type: dataTypes.STRING,
            allowNull: true,
            defaultValue: null
        },
        body_zone_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        }
    }
    let config = {
        tableName: 'category',
        timestamps: false
    }
    const Category = sequelize.define(alias, cols, config)

    Category.associate = (models) => {
        Category.hasMany(models.UserCategoryFitPreference, {
            as: 'user_fit_preferences',
            foreignKey: 'category_id'
        })
        Category.hasMany(models.Subcategory, {
            as: 'sub_categories',
            foreignKey: 'category_id'
        })
        Category.hasMany(models.Model, {
            as: 'models',
            foreignKey: 'category_id'
        })
        Category.hasMany(models.BrandCategory, {
            as: 'brands_categories',
            foreignKey: 'category_id'
        })
        Category.belongsToMany(models.Gender, {
            as: 'genders',
            through: models.GenderCategory,
            foreignKey: 'category_id',
            otherKey: 'gender_id',
            timestamps: false
        })
        Category.belongsTo(models.BodyZone, {
            as : 'body_zone',
            foreignKey : 'body_zone_id'
        })
    }

    return Category
}