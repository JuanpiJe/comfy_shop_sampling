module.exports = function (sequelize, dataTypes) {
    let alias = "Gender"
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
       name_es : {
           type : dataTypes.STRING,
           allowNull : true,
           defaultValue : null
       }
    }
    let config = {
        tableName: 'gender',
        timestamps : false
    }
    const Gender = sequelize.define(alias, cols, config)
    return Gender
}