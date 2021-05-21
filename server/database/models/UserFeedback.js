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
        brand_category_id: {
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
    
    UserFeedback.associate = (models) => {
        UserFeedback.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_id'
        })
        UserFeedback.belongsTo(models.BrandCategory, {
            as: 'brand_category',
            foreignKey: 'brand_category_id'
        })
        UserFeedback.belongsTo(models.Size, {
            as: 'size',
            foreignKey: 'size_id'
        })
        UserFeedback.belongsTo(models.Rating, {
            as: 'rating',
            foreignKey: 'rating_id'
        })
        UserFeedback.belongsTo(models.BodyPart, {
            as: 'body_part',
            foreignKey: 'body_part_id'
        }),
        UserFeedback.belongsTo(models.GeneralRating, {
            as: 'general_rating',
            foreignKey: 'general_rating_id'
        })
        UserFeedback.belongsTo(models.Survey, {
            as: 'survey',
            foreignKey: 'survey_id'
        })
    }

    return UserFeedback
}