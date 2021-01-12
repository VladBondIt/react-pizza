const initialState = {
    items: [],
    notification: false,
    itemsForNotification: [],
    totalPrice: 0,
    totalCount: 0,
    showClearPopup: false,
    showDeletePopup: false,
    idForDelete: null
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_CART':

            const newItems = [
                ...state.items,
                action.payload = {
                    ...action.payload
                }
            ];

            const allPizzas = newItems.length;
            const totalPrice = newItems.reduce((sum, obj) => sum + obj.calcedPrice, 0);

            return {
                ...state,
                items: newItems,
                totalCount: allPizzas,
                totalPrice: totalPrice,
            };
        case 'REMOVE_PIZZA_CART': {
            const filtreditem = state.items.filter((item) => item.clientId !== action.payload.clientId);

            const newItems = [
                ...filtreditem
            ];

            const allPizzas = newItems.length;
            const totalPrice = newItems.reduce((sum, obj) => sum + obj.calcedPrice, 0);

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
                    },
                ]
            };
        }
        case 'DELETE_NOTIFICATION_ITEM': {

            const filtredNotifItems = state.itemsForNotification
                .filter((item) => item.clientId !== state.itemsForNotification[0].clientId);

            return {
                ...state,
                itemsForNotification: [
                    ...filtredNotifItems
                ]
            };
        }
        case 'SET_SHOW_CLEAR_POPUP': {
            return {
                ...state,
                showClearPopup: action.payload,
            };
        }
        case 'SET_SHOW_DELETE_POPUP': {
            return {
                ...state,
                showDeletePopup: action.payload,
            };
        }
        case 'SET_ID_FOR_DELETE': {
            return {
                ...state,
                idForDelete: action.payload,
            };
        }


        default:
            return state;
    }
}

export default cart;