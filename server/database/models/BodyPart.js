module.exports = function (sequelize, dataTypes) {
    let alias = "BodyPart"
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
       },
       zone : {
        type : dataTypes.STRING,
        allowNull : true,
        defaultValue : null
    }
    }
    let config = {
        tableName: 'body_part',
        timestamps : false
    }
    const BodyPart = sequelize.define(alias, cols, config)
    
    BodyPart.associate = (models) => {
        BodyPart.hasMany(models.UserBodyShape, {
            as : 'body_shapes',
            foreignKey : 'body_part_id'
        })
        BodyPart.hasMany(models.UserFeedback, {
            as : 'feedbacks',
            foreignKey : 'body_part_id'
        })
    }

    return BodyPart
}