module.exports = function (sequelize, dataTypes) {
    let alias = "Gender"
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
       name : {
           type : dataTypes.STRING,
           allowNull : true,
           defaultValue : null
       }
    }
    let config = {
        tableName: 'gender',
        timestamps : false
    }
    const Gender = sequelize.define(alias, cols, config)
    
    Gender.associate = (models) => {
        Gender.hasMany(models.User, {
            as: 'users',
            foreignKey: 'gender_id'
        })
        Gender.belongsToMany(models.Category, {
            as: 'categories',
            through: models.GenderCategory,
            foreignKey: 'gender_id',
            otherKey: 'category_id',
            timestamps: false,
            underscored : true
        })
        Gender.hasMany(models.BrandCategory, {
            as : 'brand_categories',
            foreignKey : 'gender_id'
        })
    }

    return Gender
}