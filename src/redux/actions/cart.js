const addPizzaToCart = (addedPizzaObj) => ({
    type: 'ADD_PIZZA_CART',
    payload: addedPizzaObj
})

const removePizzaFromCart = (pizzaObj) => ({
    type: 'REMOVE_PIZZA_CART',
    payload: pizzaObj
})


export {
    addPizzaToCart,
    removePizzaFromCart
}