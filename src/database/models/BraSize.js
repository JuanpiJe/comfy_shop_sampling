module.exports = function (sequelize, dataTypes) {
    let alias = "BraSize"
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
       value : {
           type : dataTypes.STRING(45),
           allowNull : true,
           defaultValue : null
       }
    }
    let config = {
        tableName: 'bra_size',
        timestamps : false
    }
    const BraSize = sequelize.define(alias, cols, config)
    return BraSize
}