import React, { useEffect } from 'react';
import { Categories, Sort, PizzaBlock } from '../components';
import { fetchPizzas } from '../redux/actions/pizzas';
import Loader from '../components/Loader';
import { useSelector, useDispatch } from 'react-redux';

const categoryesName = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

function Home() {
    const { items, isLoaded, category, sortBy, orderSort, cartItems } = useSelector(({ pizzas, filters, cart }) => {
        return {
            items: pizzas.items,
            isLoaded: pizzas.isLoaded,
            category: filters.category,
            sortBy: filters.sortBy,
            orderSort: filters.orderSort,
            cartItems: cart.items,
        }
    });


    const dispatch = useDispatch();

    const handleAddPizzaToCart = (obj) => {
        dispatch({
            type: 'ADD_PIZZA_CART',
            payload: obj,
        });
    };

    useEffect(() => {
        dispatch(fetchPizzas(category, sortBy, orderSort));
    }, [dispatch, category, sortBy, orderSort])

    const className = "content__items";

    return (
        <div className="container">
            <div className="content__top">
                <Categories items={categoryesName} />
                <Sort />
            </div>

            <h2 className="content__title">Все пиццы</h2>
            <div className={items.length < 4 ? className + ' flex-start' : className + ''}>
                {isLoaded
                    ? items.map((obj) => (
                        <PizzaBlock
                            onClickAddPizza={handleAddPizzaToCart}
                            key={(Math.random() * 10)}
                            addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                            {...obj}
                        />
                    ))
                    : Array(4).fill(<Loader />).map(x => <Loader key={(Math.random() * 10)} />)}
            </div>
        </div>
    )
}

export default Home;





