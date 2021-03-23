module.exports = function (sequelize, dataTypes) {
    let alias = "BrandCollection"
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        brand_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
        collection_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        }
    }
    let config = {
        tableName: 'brand_collection',
        timestamps: true,
        underscored: true,
        paranoid: true
    }
    const BrandCollection = sequelize.define(alias, cols, config)
    return BrandCollection
}