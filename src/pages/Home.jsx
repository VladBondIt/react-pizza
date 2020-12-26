import React from 'react';
import { Categories, Sort, PizzaBlock } from '../components';
import { useSelector } from 'react-redux';

function Home() {

    const { items } = useSelector(({ pizzas }) => {
        return {
            items: pizzas.items
        }
    });

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={[
                        'Все',
                        'Мясные',
                        'Вегетарианские',
                        'Гриль',
                        'Острые',
                        'Закрытые'
                    ]} />
                <Sort />
            </div>

            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items && items.map((item) => <PizzaBlock key={Math.random() * 10} {...item} />)}
            </div>
        </div>
    )
}

export default Home;
