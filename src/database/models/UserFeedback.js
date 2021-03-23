module.exports = function (sequelize, dataTypes) {
    let alias = "UserFeedback"
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        body_part_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        rating_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        product_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    }
    let config = {
        tableName: 'user_feedback',
        timestamps: true,
        underscored: true,
        paranoid: true
    }
    const UserFeedback = sequelize.define(alias, cols, config)
    return UserFeedback
}