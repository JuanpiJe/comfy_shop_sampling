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
    
    UserBodyShape.associate = (models) => {
        UserBodyShape.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_id'
        })
        UserBodyShape.belongsTo(models.BodyShapeType, {
            as: 'body_shape_type',
            foreignKey: 'body_shape_type_id'
        })
        UserBodyShape.belongsTo(models.BodyPart, {
            as: 'body_part',
            foreignKey: 'body_part_id'
        })
    }

    return UserBodyShape
}