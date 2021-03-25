module.exports = function (sequelize, dataTypes) {
    let alias = "CategorySizeMeassurement"
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        meassurement: {
            type: dataTypes.DECIMAL(5,2),
            allowNull: false
        },
        size_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        category_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        subcategory_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        meassurement_point_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    }
    let config = {
        tableName: 'category_size_meassurement',
        timestamps: true,
        underscored: true,
        paranoid: true
    }
    const CategorySizeMeassurement = sequelize.define(alias, cols, config)

    CategorySizeMeassurement.associate = (models) => {
        CategorySizeMeassurement.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'category_id'
        })
        CategorySizeMeassurement.belongsTo(models.Size, {
            as: 'size',
            foreignKey: 'size_id'
        })
        CategorySizeMeassurement.belongsTo(models.SubCategory, {
            as: 'subcategory',
            foreignKey: 'subcategory_id'
        })
        CategorySizeMeassurement.belongsTo(models.SubCategory, {
            as: 'meassurement_point',
            foreignKey: 'meassurement_point_id'
        })
    }    

    return CategorySizeMeassurement
}