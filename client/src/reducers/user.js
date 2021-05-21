const dft = {
    email: null,
    basic_data: {},
    feedbacks : []
}
const userReducer = (state = dft, action) => {
    switch (action.type) {
        case 'SAVE_EMAIL':
            state = {
                ...state,
                email: action.payload.email,
                id: action.payload.id
            }
            break;
        case 'SAVE_BASIC_DATA':
            state = {
                ...state,
                basic_data: {
                    age: action.payload.age,
                    weight: action.payload.weight,
                    height: action.payload.height,
                    bmi: action.payload.bmi
                }
            }
            break;
        case 'SAVE_GENERAL_RATING':
            const newGeneralRating = action.payload
            state = {
                ...state, 
                feedbacks : [
                    ...state.feedbacks,
                    newGeneralRating
                ]
            }
            // state.feedbacks[state.feedbacks.length-1].general_rating_id = newGeneralRating
            break;
        default:
            state = { ...state }
            break;
    }
    return state
}
export default userReducer