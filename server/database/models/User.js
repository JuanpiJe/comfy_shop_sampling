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
    User.associate = (models) => {
        User.belongsTo(models.Gender, {
            as: 'gender',
            foreignKey: 'gender_id'
        })
        User.hasMany(models.UserCategoryFitPreference, {
            as: 'categories_fit_preferences',
            foreignKey: 'user_id'
        })
        User.hasMany(models.UserBodyShape, {
            as: 'body_shapes',
            foreignKey: 'user_id'
        })
        User.hasMany(models.UserFeedback, {
            as: 'feedbacks',
            foreignKey: 'user_id'
        })
        User.belongsTo(models.BraSize, {
            as: 'bra_size',
            foreignKey: 'bra_size_id'
        }),
        User.hasMany(models.Survey, {
            as :'surveys',
            foreignKey : 'user_id'
        })
    }
    return User
}