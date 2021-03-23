//------- Model Imports -------//
const BodyPart = require('./models/BodyPart')
const BodyShapeType = require('./models/BodyShapeType')
const Brand = require('./models/Brand')
const BrandCollection = require('./models/BrandCollection')
const BraSize = require('./models/BraSize')
const Category = require('./models/Category')
const Collection = require('./models/Collection')
const Gender = require('./models/Gender')
const MeassurementPoint = require('./models/MeassurementPoint')
const Preference = require('./models/Preference')
const Product = require('./models/Product')
const Rating = require('./models/Rating')
const Shop = require('./models/Shop')
const Size = require('./models/Size')
const SubCategory = require('./models/SubCategory')
const User = require('./models/User')
const UserCategoryFitPreference = require('./models/UserCategoryFitPreference')
const UserFeedback = require('./models/UserFeedback')
const UserBodyShape = require('./models/UserBodyShape')
const CategorySizeMeassurement = require('./models/CategorySizeMeassurement')

//---------------------------------------------------------------------//
//--------------------- User related associations ---------------------//
//---------------------------------------------------------------------//

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
    })
}

Preference.associate = (models) => {
    Preference.hasMany(models.UserCategoryFitPreference, {
        as: 'categories_fit_preferences',
        foreignKey: 'preference_id'
    })
}

Gender.associate = (models) => {
    Gender.hasMany(models.User, {
        as: 'users',
        foreignKey: 'gender_id'
    })
    Gender.belongsToMany(models.Category, {
        as: 'categories',
        through: 'gender_category',
        foreignKey: 'gender_id',
        otherKey: 'category_id',
        timestamps: false
    })
}

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

UserFeedback.associate = (models) => {
    UserFeedback.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'user_id'
    })
    UserFeedback.belongsTo(models.Rating, {
        as: 'rating',
        foreignKey: 'rating_id'
    })
    UserFeedback.belongsTo(models.BodyPart, {
        as: 'body_part',
        foreignKey: 'body_part_id'
    })
    UserFeedback.belongsTo(models.Product, {
        as: 'product',
        foreignKey: 'product_id'
    })
}

BraSize.associate = (models) => {
    BraSize.hasMany(models.User, {
        as: 'users',
        foreignKey: 'bra_size_id'
    })
}

Rating.associate = (models) => {
    Rating.hasMany(models.UserFeedback, {
        as : 'user_feedback',
        foreignKey : 'rating_id'
    })
}

BodyPart.associate = (models) => {
    BodyPart.hasMany(models.UserBodyShape, {
        as : 'body_shapes',
        foreignKey : 'body_part_id'
    })
    BodyPart.hasMany(models.UserFeedback, {
        as : 'feedbacks',
        foreignKey : 'body_part_id'
    })
}

BodyShapeType.associate = (models) => {
    BodyShapeType.hasMany(models.UserBodyShape, {
        as : 'users',
        foreignKey : 'body_shape_type_id'
    })
}

//-------------------------------------------------------------------------//
//--------------------- Products related associations ---------------------//
//-------------------------------------------------------------------------//

Product.associate = (models) => {
    Product.belongsTo(models.Category, {
        as: 'category',
        foreignKey: 'category_id'
    })
    Product.belongsTo(models.SubCategory, {
        as: 'sub_category',
        foreignKey: 'sub_category_id'
    })
    Product.belongsTo(models.Brand, {
        as: 'brand',
        foreignKey: 'brand_id'
    })
    Product.belongsTo(models.BrandColection, {
        as: 'brand_collection',
        foreignKey: 'brand_collection_id'
    })
    Product.hasMany(models.UserFeedback, {
        as: 'users_feedbacks',
        foreignKey: 'product_id'
    })
    Product.belongsToMany(models.Size, {
        as: 'sizes',
        through: 'product_size',
        foreignKey: 'product_id',
        otherKey: 'size_id',
        timestamps: false
    })
    Product.belongsToMany(models.Shop, {
        as: 'shops',
        through: 'shop_product',
        foreignKey: 'product_id',
        otherKey: 'shop_id',
        timestamps: false
    })
}

Category.associate = (models) => {
    Category.hasMany(models.Product, {
        as: 'products',
        foreignKey: 'category_id'
    })
    Category.hasMany(models.UserCategoryFitPreference, {
        as: 'user_fit_preferences',
        foreignKey: 'category_id'
    })
    Category.hasMany(models.CategorySizeMeassurement, {
        as: 'size_meassurements',
        foreignKey: 'category_id'
    })
    Category.hasMany(models.SubCategory, {
        as: 'sub_categories',
        foreignKey: 'category_id'
    })
    Category.belongsToMany(models.Gender, {
        as: 'genders',
        through: 'gender_category',
        foreignKey: 'category_id',
        otherKey: 'gender_id',
        timestamps: false
    })
}
CategorySizeMeassurement.associate = (models) => {
    CategorySizeMeassurement.belongsTo(models.Category, {
        as: 'category',
        foreignKey: 'category_id'
    })
    CategorySizeMeassurement.belongsTo(models.Size, {
        as: 'size',
        foreignKey: 'size_id'
    })
    CategorySizeMeassurement.belongsTo(models.SubCategory, {
        as: 'sub_category',
        foreignKey: 'sub_category_id'
    })
    CategorySizeMeassurement.belongsTo(models.SubCategory, {
        as: 'meassurement_point',
        foreignKey: 'meassurement_point_id'
    })
}

Size.associate = (models) => {
    Size.hasMany(models.Size, {
        as: 'category_meassurements',
        foreignKey: 'size_id'
    })
    Size.belongsToMany(models.Product, {
        as: 'products',
        through: 'product_size',
        foreignKey: 'size_id',
        otherKey: 'product_id',
        timestamps: false
    })
}

SubCategory.associate = (models) => {
    SubCategory.hasMany(models.CategorySizeMeassurement, {
        as: 'size_meassurements',
        foreignKey: 'sub_category_id'
    })
    SubCategory.hasMany(models.Product, {
        as: 'products',
        foreignKey: 'sub_category_id'
    })
    SubCategory.belongsTo(models.Category, {
        as: 'category',
        foreignKey: 'category_id'
    })
}

MeassurementPoint.associate = (models) => {
    MeassurementPoint.hasMany(models.CategorySizeMeassurement, {
        as: 'categories_meassurements',
        foreignKey: 'meassurement_point_id'
    }),
        MeassurementPoint.belongsTo(models.BodyPart, {
            as: 'body_part',
            foreignKey: 'body_part_id'
        })
}

//-------------------------------------------------------------------------//
//--------------------- Shops related associations ------------------------//
//-------------------------------------------------------------------------//
Shop.associate = (models) => {
    Shop.belongsToMany(models.Product, {
        as: 'products',
        through: 'shop_product',
        foreignKey: 'shop_id',
        otherKey: 'product_id',
        timestamps: false
    })
    Shop.belongsToMany(models.Brand, {
        as: 'brands',
        through: 'shop_brand',
        foreignKey: 'shop_id',
        otherKey: 'brand_id',
        timestamps: false
    })
}
Brand.associate = (models) => {
    Brand.hasMany(models.Product, {
        as : 'products',
        foreignKey : 'brand_id'
    })
    Brand.hasMany(models.BrandCollection, {
        as : 'collections',
        foreignKey : 'brand_id'
    }),
    Brand.belongsToMany(models.Shop, {
        as : 'shops',
        through : 'shop_brand',
        foreignKey : 'brand_id',
        otherKey : 'brand_id',
        timestamps : false
    })
}
BrandCollection.associate = (models) => {
    BrandCollection.hasMany(models.Products, {
        as : 'products',
        foreignKey : 'brand_collection_id'
    })
    BrandCollection.belongsTo(models.Collection, {
        as : 'collection',
        foreignKey : 'collection_id'
    })
    BrandCollection.belongsTo(models.Brand, {
        as : 'brand',
        foreignKey : 'brand_id'
    })
}

Collection.associate = (models) => {
    Collection.hasMany(models.BrandCollection, {
        as : 'brand_collections',
        foreignKey : 'collection_id'
    })
}