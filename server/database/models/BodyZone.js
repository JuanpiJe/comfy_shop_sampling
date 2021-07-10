module.exports = function (sequelize, dataTypes) {
    let alias = "BodyZone"
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: true,
            defaultValue: null
        },
    }
    let config = {
        tableName: 'body_zone',
        timestamps: false
    }
    const BodyZone = sequelize.define(alias, cols, config)
    BodyZone.associate = (models) => {
        BodyZone.hasMany(models.Category, {
            as: 'categories',
            foreignKey: 'body_zone_id'
        })
        BodyZone.hasMany(models.BodyPart, {
            as: 'body_parts',
            foreignKey: 'body_zone_id'
        })
        BodyZone.hasMany(models.FeedbackBodyZone, {
            as: 'feedbacks_body_zones',
            foreignKey: 'body_zone_id'
        })
    }

    return BodyZone
}