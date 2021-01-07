import React, { useEffect } from 'react';
import { Categories, Sort, PizzaBlock } from '../components';
import { fetchPizzas } from '../redux/actions/pizzas';
import Loader from '../components/Loader';
import { useSelector, useDispatch } from 'react-redux';
import AddNotification from '../components/AddNotification';

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

    console.log(notif.length);


    const dispatch = useDispatch();

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
                    ? items.map((item) =>
                        <PizzaBlock
                            key={(Math.random() * 10)}
                            {...item} />)
                    : Array(4).fill(<Loader />).map(x => <Loader key={(Math.random() * 10)} />)}

            </div>
            <ul className="notification">
                {notif.length === 0 ? '' : notif.map((obj) => <AddNotification key={(Math.random() * 10)} {...obj} notif={notif} />)}
            </ul>
        </div>
    )
}

export default Home;

