module.exports = function (sequelize, dataTypes) {
    let alias = "BodyPart"
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
       name_en : {
           type : dataTypes.STRING,
           allowNull : true,
           defaultValue : null
       },
       body_zone_id : {
        type : dataTypes.INTEGER(11),
        allowNull : false
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
        BodyPart.belongsTo(models.BodyZone, {
            as : 'body_zone',
            foreignKey : 'body_zone_id'
        })
    }

    return BodyPart
}