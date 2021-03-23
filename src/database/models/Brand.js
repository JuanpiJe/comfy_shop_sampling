module.exports = function (sequelize, dataTypes) {
    let alias = "Brand"
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name : {
            type: dataTypes.STRING(45),
            allowNull: true,
            defaultValue : null
        },
        contactname : {
            type: dataTypes.STRING(45),
            allowNull: true,
            defaultValue : null
        },
        province : {
            type: dataTypes.STRING(45),
            allowNull: true,
            defaultValue : null
        },
        city : {
            type: dataTypes.STRING(45),
            allowNull: true,
            defaultValue : null
        },
        address : {
            type: dataTypes.STRING(155),
            allowNull: true,
            defaultValue : null
        }
    }
    let config = {
        tableName: 'brand',
        timestamps: true,
        underscored: true,
        paranoid: true
    }
    const Brand = sequelize.define(alias, cols, config)
    return Brand
}