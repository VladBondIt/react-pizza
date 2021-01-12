import React, { useEffect } from 'react';
import { Categories, Sort, PizzaBlock, AddNotification, Loader } from '../components';
import { fetchPizzas } from '../redux/actions/pizzas';
import { useSelector, useDispatch } from 'react-redux';
import { onClearNotificationItems } from '../redux/actions/cart';

const categoryesName = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

function Home() {
    const { items, isLoaded, category, sortBy, orderSort, notif } = useSelector(({ pizzas, filters, cart }) => {
        return {
            items: pizzas.items,
            isLoaded: pizzas.isLoaded,
            category: filters.category,
            sortBy: filters.sortBy,
            orderSort: filters.orderSort,
            notif: cart.itemsForNotification,
        }
    });


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPizzas(category, sortBy, orderSort))
        dispatch(onClearNotificationItems());
    }, [dispatch, category, sortBy, orderSort])


    return (
        <div className="container">
            <div className="content__top">
                <Categories items={categoryesName} />
                <Sort />
            </div>

            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded
                    ? items.map((item) =>
                        <PizzaBlock
                            key={(Math.random() * 10)}
                            {...item} />)
                    : Array(4).fill(<Loader />).map(x => <Loader key={(Math.random() * 10)} />)}

            </div>
            <ul className="notification">
                {notif.length === 0 ? '' : notif.map((obj) => <AddNotification key={(Math.random() * 10)} {...obj} />)}
            </ul>
        </div>
    )
}

export default Home;

