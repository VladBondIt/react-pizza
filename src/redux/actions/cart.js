const addPizzaToCart = (addedPizzaObj) => ({
    type: 'ADD_PIZZA_CART',
    payload: addedPizzaObj
})

const removePizzaFromCart = (pizzaObj) => ({
    type: 'REMOVE_PIZZA_CART',
    payload: pizzaObj
})

const clearCart = () => ({
    type: 'CLEAR_CART'
})

const deleteNotificationItem = () => ({
    type: 'DELETE_NOTIFICATION_ITEM',
})
const setNotificationItems = (smallObj) => ({
    type: 'SET_NOTIFICATION_ITEMS',
    payload: smallObj
})


export {
    addPizzaToCart,
    removePizzaFromCart,
    clearCart,
    deleteNotificationItem,
    setNotificationItems
}