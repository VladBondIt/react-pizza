import React, { useEffect } from 'react';
import { Categories, Sort, PizzaBlock, AddNotification, Loader } from '../components';
import { fetchPizzas } from '../redux/actions/pizzas';
import { useSelector, useDispatch } from 'react-redux';
import { onClearNotificationItems } from '../redux/actions/cart';

const categoryesName = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
const arrKeys = [1, 2, 3, 4]

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
                            key={item.id}
                            {...item} />)
                    : arrKeys.map(numKey => <Loader key={numKey} />)}

            </div>
            <ul className="notification">
                {notif.length === 0 ? '' : notif.map((obj) => <AddNotification key={obj.clientId} {...obj} />)}
            </ul>
        </div>
    )
}

export default Home;

