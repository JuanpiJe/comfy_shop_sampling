module.exports = function (sequelize, dataTypes) {
    let alias = "UserCategoryFitPreference"
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
        preference_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        category_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    }
    let config = {
        tableName: 'user_category_fit_preference',
        timestamps: true,
        underscored: true,
        paranoid: true
    }
    const UserCategoryFitPreference = sequelize.define(alias, cols, config)
    
    UserCategoryFitPreference.associate = (models) => {
        UserCategoryFitPreference.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_id'
        })
        UserCategoryFitPreference.belongsTo(models.Preference, {
            as: 'preference',
            foreignKey: 'preference_id'
        })
        UserCategoryFitPreference.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'category_id'
        })
    }
    
    return UserCategoryFitPreference
}