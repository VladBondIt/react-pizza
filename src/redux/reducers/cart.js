const initialState = {
    items: [],
    totalPrice: 0,
    totalCount: 0,
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_CART':
            console.log(state)

            const newItems = [
                ...state.items,
                action.payload = {
                    ...action.payload,
                    id: (Math.random() * 100)
                }
            ]

            const allPizzas = newItems.length;
            const totalPrice = newItems.reduce((sum, obj) => sum + obj.price, 0);

            return {
                ...state,
                items: newItems,
                totalCount: allPizzas,
                totalPrice: totalPrice,
            };
        case 'REMOVE_PIZZA_CART': {
            const itemIndex = state.items.filter((item) => item.id !== action.payload.id);

            const newItems = [
                ...itemIndex
            ];

            const allPizzas = newItems.length;
            console.log(itemIndex)
            const totalPrice = newItems.reduce((sum, obj) => sum + obj.price, 0);
            return {
                ...state,
                items: newItems,
                totalCount: allPizzas,
                totalPrice: totalPrice,
            };

        }

        default:
            return state;
    }
}

export default cart;