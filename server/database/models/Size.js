module.exports = function (sequelize, dataTypes) {
    let alias = "Size"
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        label : {
            type: dataTypes.STRING(4),
            allowNull : true,
            defaultValue : null
        },
        name: {
            type: dataTypes.STRING,
            allowNull: true,
            defaultValue: null
        }
    }
    let config = {
        tableName: 'Size',
        timestamps : false
    }
    const Size = sequelize.define(alias, cols, config)

    Size.associate = (models) => {
        Size.hasMany(models.BrandCategorySizeMeassurement, {
            as: 'category_meassurement',
            foreignKey: 'size_id'
        }),
        Size.hasMany(models.UserFeedback, {
            as: 'users_feedbacks',
            foreignKey: 'size_id'
        })
    }

    return Size
}