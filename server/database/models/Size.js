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
        name_en: {
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
        })
        Size.belongsToMany(models.Product, {
            as: 'products',
            through: 'product_size',
            foreignKey: 'size_id',
            otherKey: 'product_id',
            timestamps: false
        })
    }

    return Size
}