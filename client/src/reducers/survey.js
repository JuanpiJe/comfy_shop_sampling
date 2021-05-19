const dft = {
    gender: {},
    brand_category: [],
}
const surveyReducer = (state = dft, action) => {
    switch (action.type) {
        case 'SAVE_GENDER':
            state = {
                ...state,
                gender: action.payload.gender
            }
            break;
        case 'CREATE_SURVEY':
            state = {
                ...state,
                id: action.payload.id
            }
            break;
        case 'SAVE_PRODUCT':
            const newCategory = action.payload
            state = {
                ...state,
                brand_category: [
                    ...state.brand_category,
                    newCategory
                ]
            }
            break;
        case 'SET_PRODUCT_RENDER':
            const newProductRender = action.payload
            state = {
                ...state,
                productRender: newProductRender
            }
            break;
        case 'SAVE_SIZE':
            const newSize = action.payload
            state = {
                ...state,
                brand_category: [
                    ...state.brand_category,
                ]
            }
            state.brand_category[state.brand_category.length - 1].sizes = newSize
            break;
        case 'SAVE_FIT_PREFERENCE':
            const newPreference = action.payload
            state = {
                ...state,
                brand_category: [
                    ...state.brand_category,
                ]
            }
            state.brand_category[newPreference.index].preference_id = newPreference.preference_id
            break;
        default:
            state = { ...state }
            break;
    }
    return state
}

export default surveyReducer