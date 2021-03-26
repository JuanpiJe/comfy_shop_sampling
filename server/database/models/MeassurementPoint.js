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

    MeassurementPoint.associate = (models) => {
        MeassurementPoint.hasMany(models.CategorySizeMeassurement, {
            as: 'categories_meassurements',
            foreignKey: 'meassurement_point_id'
        }),
            MeassurementPoint.belongsTo(models.BodyPart, {
                as: 'body_part',
                foreignKey: 'body_part_id'
            })
    }    

    return MeassurementPoint
}