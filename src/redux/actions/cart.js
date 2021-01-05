const addPizzaToCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj
})

const removePizzaFromCart = (id) => ({
    type: 'REMOVE_PIZZA_CART',
    payload: id
})


export {
    addPizzaToCart,
    removePizzaFromCart
}