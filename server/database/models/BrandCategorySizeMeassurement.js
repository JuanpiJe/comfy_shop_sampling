module.exports = function (sequelize, dataTypes) {
    let alias = "BrandCategorySizeMeassurement"
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        meassurement: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        size_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        brand_category_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        meassurement_point_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    }
    let config = {
        tableName: 'brand_category_size_meassurement',
        timestamps: true,
        underscored: true,
        paranoid: true
    }
    const BrandCategorySizeMeassurement = sequelize.define(alias, cols, config)

    BrandCategorySizeMeassurement.associate = (models) => {
        BrandCategorySizeMeassurement.belongsTo(models.BrandCategory, {
            as: 'brand_category',
            foreignKey: 'brand_category_id'
        })
        BrandCategorySizeMeassurement.belongsTo(models.Size, {
            as: 'size',
            foreignKey: 'size_id'
        })
        BrandCategorySizeMeassurement.belongsTo(models.MeassurementPoint, {
            as: 'meassurement_point',
            foreignKey: 'meassurement_point_id'
        })
    }    

    return BrandCategorySizeMeassurement
}