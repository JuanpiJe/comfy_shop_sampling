module.exports = function (sequelize, dataTypes) {
    let alias = "MeassurementPoint"
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
       },
       body_part_id : {
           type : dataTypes.INTEGER(11),
           allowNUll : false
       }
    }
    let config = {
        tableName: 'meassurement_point',
        timestamps : false
    }
    const MeassurementPoint = sequelize.define(alias, cols, config)
    return MeassurementPoint
}