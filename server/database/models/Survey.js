module.exports = function (sequelize, dataTypes) {
    let alias = "Survey"
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: dataTypes.INTEGER(11),
            allowNUll: false
        },
        shop_id: {
            type: dataTypes.INTEGER(11),
            allowNUll: false
        }
    }
    let config = {
        tableName: 'survey',
        timestamps: true, 
        underscored: true,
        paranoid: true
    }
    const Survey = sequelize.define(alias, cols, config)

    Survey.associate = (models) => {
        Survey.belongsTo(models.User, {
            as: 'user',
            foreignKey : 'user_id'
        }),
        Survey.belongsTo(models.Shop, {
            as: 'shop',
            foreignKey : 'shop_id'
        }),
        Survey.hasMany(models.UserFeedback, {
            as : 'users_feedbacks',
            foreignKey : 'survey_id'
        })
    }

    return Survey
}