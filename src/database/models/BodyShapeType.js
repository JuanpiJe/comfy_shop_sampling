module.exports = function (sequelize, dataTypes) {
    let alias = "BodyShapeType"
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
       name_en : {
           type : dataTypes.STRING,
           allowNull : true,
           defaultValue : null
       }
    }
    let config = {
        tableName: 'body_shape_type',
        timestamps : false
    }
    const BodyShapeType = sequelize.define(alias, cols, config)

    BodyShapeType.associate = (models) => {
        BodyShapeType.hasMany(models.UserBodyShape, {
            as : 'users',
            foreignKey : 'body_shape_type_id'
        })
    }

    return BodyShapeType
}