const fetchPizzas = () => dispatch => {
    // Можно передать диспатч в качестве агрумента
    fetch("http://localhost:3004/pizzas")
        .then((resp) => {
            if (!resp.ok) {
                throw new Error(`Could not fetch ${"http://localhost:3004/pizzas"}` +
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
    payload: items,
});

export {
    fetchPizzas
};