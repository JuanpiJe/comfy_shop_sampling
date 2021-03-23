module.exports = function (sequelize, dataTypes) {
    let alias = "User"
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: dataTypes.STRING(45),
            allowNull: true,
            defaultValue : null
        },
        gender_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        height: {
            type: dataTypes.INTEGER(3),
            allowNull: true,
            defaultValue: null
        },
        weight: {
            type: dataTypes.INTEGER(3),
            allowNull: true,
            defaultValue: null
        },
        age: {
            type: dataTypes.INTEGER(3),
            allowNull: true,
            defaultValue: null
        },
        bmi: {
            type: dataTypes.INTEGER(3),
            allowNull: true,
            defaultValue: null
        },
        bra_size_id: {
            type: dataTypes.INTEGER,
            allowNull: true,
            defaultValue: null
        }
    }
    let config = {
        tableName: 'user',
        timestamps: true,
        underscored: true,
        paranoid: true
    }
    const User = sequelize.define(alias, cols, config)
    return User
}