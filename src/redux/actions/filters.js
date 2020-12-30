const setSortBy = (sortType) => ({
    type: 'SET_SORT_BY',
    payload: sortType
});

const setCategory = (index) => ({
    type: 'SET_CATEGORY',
    payload: index
});

const setOrderSort = (order) => ({
    type: 'SET_ORDER_SORT',
    payload: order
});

const setSortSelectList = (x) => ({
    type: 'SET_SELECT_LIST',
    payload: x
});


export {
    setSortBy,
    setCategory,
    setOrderSort,
    setSortSelectList
}