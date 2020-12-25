const initialState = {
    isShowPopup: false

}
const showPopup = (state = initialState, action) => {
    if (action.type === 'SET_SHOW_POPUP') {
        return {
            ...state,
            isShowPopup: action.payload
        }
    }
    return state;

}

export default showPopup;