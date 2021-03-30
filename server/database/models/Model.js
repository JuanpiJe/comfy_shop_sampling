module.exports = function (sequelize, dataTypes) {
    let alias = "Model"
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
        tableName: 'model',
        timestamps : false
    }
    const Model = sequelize.define(alias, cols, config)
    
    Model.associate = (models) => {
        Model.belongsTo(models.SubCategory, {
            as: 'subcategory',
            foreignKey: 'subcategory_id'
        }),
        Model.hasMany(models.BrandCategory, {
            as : 'brand_categories',
            foreignKey : 'model_id'
        })
    }

    return Model
}