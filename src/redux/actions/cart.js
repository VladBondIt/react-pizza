const addPizzaToCart = (addedPizzaObj) => ({
    type: 'ADD_PIZZA_CART',
    payload: {
        ...addedPizzaObj,
        clientId: (Math.random() * 100)
    }
})

const removePizzaFromCart = (pizzaObj) => ({
    type: 'REMOVE_PIZZA_CART',
    payload: pizzaObj
})

const clearCart = () => ({
    type: 'CLEAR_CART'
})

const deleteNotificationItem = (idForDeleteNotifItem) => ({
    type: 'DELETE_NOTIFICATION_ITEM',
    payload: idForDeleteNotifItem
})
const setNotificationItems = (smallObj) => ({
    type: 'SET_NOTIFICATION_ITEMS',
    payload: {
        ...smallObj,
        clientId: (Math.random() * 100)
    }
})

const setShowClearPopup = (clearBoolean) => ({
    type: 'SET_SHOW_CLEAR_POPUP',
    payload: clearBoolean
})
const setShowDeletePopup = (deleteBoolean) => ({
    type: 'SET_SHOW_DELETE_POPUP',
    payload: deleteBoolean
})

const setIdForDelete = (objIdFordelete) => ({
    type: 'SET_ID_FOR_DELETE',
    payload: objIdFordelete
})

const onClearNotificationItems = () => ({
    type: 'CLEAR_NOTIFICATION_ITEMS'
})


export {
    addPizzaToCart,
    removePizzaFromCart,
    clearCart,
    deleteNotificationItem,
    setNotificationItems,
    setShowClearPopup,
    setShowDeletePopup,
    setIdForDelete,
    onClearNotificationItems
}