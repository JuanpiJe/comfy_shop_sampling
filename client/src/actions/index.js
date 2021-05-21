export const saveLogin = (data) => {
    return {
        type : 'SIGN_IN',
        payload : data
    }
}

export const createSurvey = (data) => {
    return {
        type : 'CREATE_SURVEY',
        payload : data
    }
}

export const saveGender = (data) => {
    return {
        type : 'SAVE_GENDER',
        payload : data
    }
}

export const saveProduct  = (data) => {
    return {
        type : 'SAVE_PRODUCT',
        payload : data
    }
}

export const setProductRender  = (data) => {
    return {
        type : 'SET_PRODUCT_RENDER',
        payload : data
    }
}

export const setSizeRender  = (data) => {
    return {
        type : 'SET_SIZE_RENDER',
        payload : data
    }
}

export const saveSize  = (data) => {
    return {
        type : 'SAVE_SIZE',
        payload : data
    }
}

export const saveEmail  = (data) => {
    return {
        type : 'SAVE_EMAIL',
        payload : data
    }
}

export const saveBasicData  = (data) => {
    return {
        type : 'SAVE_BASIC_DATA',
        payload : data
    }
}

export const saveBodyShape  = (data) => {
    return {
        type : 'SAVE_BODY_SHAPE',
        payload : data
    }
}

export const saveFitPreference  = (data) => {
    return {
        type : 'SAVE_FIT_PREFERENCE',
        payload : data
    }
}

export const saveGeneralRating  = (data) => {
    return {
        type : 'SAVE_GENERAL_RATING',
        payload : data
    }
}

export const saveDatiledFeedback  = (data) => {
    return {
        type : 'SAVE_DETAILED_FEEDBACK',
        payload : data
    }
}