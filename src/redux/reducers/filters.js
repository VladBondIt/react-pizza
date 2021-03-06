const initialState = {
    category: 0,
    sortBy: 'rating',
    orderSort: 'asc',
    sortSelect: false
}
const filters = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy: action.payload
            }
        case 'SET_CATEGORY':
            return {
                ...state,
                category: action.payload
            }
        case 'SET_ORDER_SORT':
            return {
                ...state,
                orderSort: action.payload
            }
        case 'SET_SELECT_LIST':
            return {
                ...state,
                sortSelect: action.payload
            }
        default:
            return state;
    }
}

export default filters;