const initialState = {
    items: [],
    notification: false,
    itemsForNotification: [],
    totalPrice: 0,
    totalCount: 0,
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_CART':

            const newItems = [
                ...state.items,
                action.payload = {
                    ...action.payload,
                    id: (Math.random() * 100)
                }
            ];

            const allPizzas = newItems.length;
            const totalPrice = newItems.reduce((sum, obj) => sum + obj.price, 0);

            return {
                ...state,
                items: newItems,
                totalCount: allPizzas,
                totalPrice: totalPrice,
            };
        case 'REMOVE_PIZZA_CART': {
            const filtreditem = state.items.filter((item) => item.id !== action.payload.id);

            const newItems = [
                ...filtreditem
            ];

            const allPizzas = newItems.length;
            const totalPrice = newItems.reduce((sum, obj) => sum + obj.price, 0);
            return {
                ...state,
                items: newItems,
                totalCount: allPizzas,
                totalPrice: totalPrice,
            };

        }
        case 'CLEAR_CART': {
            return {
                items: [],
                notification: false,
                itemsForNotification: [],
                totalCount: 0,
                totalPrice: 0,
            };
        }
        case 'SET_NOTIFICATION_ITEMS': {
            return {
                ...state,
                itemsForNotification: [
                    ...state.itemsForNotification,
                    action.payload = {
                        ...action.payload,
                        id: (Math.random() * 100)
                    },
                ]
            };
        }
        case 'DELETE_NOTIFICATION_ITEM': {
            const index = state.itemsForNotification.length - 1;

            const filtredNotifItems = state.itemsForNotification.filter((item) => item.id !== state.itemsForNotification[index].id);
            console.log(filtredNotifItems)
            return {
                ...state,
                itemsForNotification: [
                    ...filtredNotifItems
                ]
            };
        }



        default:
            return state;
    }
}

export default cart;