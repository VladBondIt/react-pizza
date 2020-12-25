const initialState = {
    showPopup: false

}
const showPopup = (state = initialState, action) => {
    if (action.type === 'SET_SHOW_POPUP') {
        return {
            ...state,
            showPopup: action.payload
        }
    }
    return state;

}

export default showPopup;