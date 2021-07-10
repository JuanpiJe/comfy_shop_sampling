module.exports = function (sequelize, dataTypes) {
    let alias = "FeedbackBodyZone"
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
        body_zone_id : {
            type: dataTypes.INTEGER(11),
            alloNull : false
        }
    }
    let config = {
        tableName: 'feedback_body_zone',
        timestamps: false
    }
    const FeedbackBodyZone = sequelize.define(alias, cols, config)
    FeedbackBodyZone.associate = (models) => {
        FeedbackBodyZone.belongsTo(models.BodyZone, {
            as : 'body_zone',
            foreignKey : 'body_zone_id'
        })
    }
    return FeedbackBodyZone
}