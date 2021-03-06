module.exports = function (sequelize, dataTypes) {
    let alias = "Collection"
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
       },
       year : {
           type : dataTypes.INTEGER,
           allowNull : true,
           defaultValue : null
       },
       start_date : {
           type : dataTypes.DATE,
           allowNull : true,
           defaultValue : null
       },
       end_date : {
        type : dataTypes.DATE,
        allowNull : true,
        defaultValue : null
    }
    }
    let config = {
        tableName: 'collection',
        timestamps : false
    }
    const Collection = sequelize.define(alias, cols, config)

    Collection.associate = (models) => {
        Collection.hasMany(models.BrandCollection, {
            as : 'brand_collections',
            foreignKey : 'collection_id'
        })
        Collection.hasMany(models.BrandCollection, {
            as: 'brand_categories',
            foreignKey: 'collection_id'
        })
    }

    return Collection
}