module.exports = function (sequelize, dataTypes) {
    let alias = "UserBodyShape"
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
        body_shape_type_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    }
    let config = {
        tableName: 'user_body_shape',
        timestamps: true,
        underscored: true,
        paranoid: true
    }
    const UserBodyShape = sequelize.define(alias, cols, config)
    return UserBodyShape
}