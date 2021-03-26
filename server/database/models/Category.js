module.exports = function (sequelize, dataTypes) {
    let alias = "Category"
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
       name_es : {
           type : dataTypes.STRING,
           allowNull : true,
           defaultValue : null
       }
    }
    let config = {
        tableName: 'category',
        timestamps : false
    }
    const Category = sequelize.define(alias, cols, config)
    
    Category.associate = (models) => {
        Category.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'category_id'
        })
        Category.hasMany(models.UserCategoryFitPreference, {
            as: 'user_fit_preferences',
            foreignKey: 'category_id'
        })
        Category.hasMany(models.CategorySizeMeassurement, {
            as: 'size_meassurements',
            foreignKey: 'category_id'
        })
        Category.hasMany(models.SubCategory, {
            as: 'sub_categories',
            foreignKey: 'category_id'
        })
        Category.belongsToMany(models.Gender, {
            as: 'genders',
            through: 'gender_category',
            foreignKey: 'category_id',
            otherKey: 'gender_id',
            timestamps: false
        })
    }

    return Category
}