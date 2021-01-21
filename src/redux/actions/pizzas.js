const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload
})


const fetchPizzas = (category, sortBy, orderSort) => dispatch => {
    const apiUrl = 'http://localhost:3004/pizzas';
    const categoryUrl = `?category=${category - 1}`;
    const sortUrl = `&_sort=${sortBy}&_order=${orderSort}`;

    dispatch(setLoaded(false))
    // Можно передать диспатч в качестве агрумента
    fetch(`${apiUrl}${category === 0 ? '?' : categoryUrl}${sortUrl}`)
        .then((resp) => {
            if (!resp.ok) {
                throw new Error(`Could not fetch ${apiUrl}` +
                    `, received ${resp.status}`);
            }
            return resp.json();
        })
        .then((data) => {
            dispatch(setPizzas(data));
        })
}


const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
});

export {
    fetchPizzas
};