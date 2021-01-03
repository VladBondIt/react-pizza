const addPizzaToCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj
})

const removePizzaFromCart = (pizzaObj) => ({
    type: 'REMOVE_PIZZA_CART',
    payload: pizzaObj
})


export {
    addPizzaToCart,
    removePizzaFromCart
}