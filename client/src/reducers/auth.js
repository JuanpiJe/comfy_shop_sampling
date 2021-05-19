const authReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            state = {
                ...state,
                name: action.payload.shopName,
                id: action.payload.shopID
            }
            break;
        default:
            state = { ...state }
            break;
    }
    return state
}

export default authReducer