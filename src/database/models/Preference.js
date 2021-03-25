module.exports = function (sequelize, dataTypes) {
    let alias = "Preference"
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        value: {
            type: dataTypes.STRING(2),
            allowNull: true,
            defaultValue: null
        },
        name_es: {
            type: dataTypes.STRING,
            allowNull: true,
            defaultValue: null
        },
        name_en: {
            type: dataTypes.STRING,
            allowNUll: true,
            defaultValue: null
        }
    }
    let config = {
        tableName: 'preference',
        timestamps: true,
        underscored: true,
        paranoid: true
    }
    const Preference = sequelize.define(alias, cols, config)

    Preference.associate = (models) => {
        Preference.hasMany(models.UserCategoryFitPreference, {
            as: 'categories_fit_preferences',
            foreignKey: 'preference_id'
        })
    }

    return Preference
}