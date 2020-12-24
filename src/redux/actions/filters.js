const setSortBy = (sortType) => ({
    type: 'SET_SORT_BY',
    payload: sortType
});

const setCategory = (index) => ({
    type: 'SET_CATEGORY',
    payload: index
});