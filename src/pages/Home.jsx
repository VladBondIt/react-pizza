import React from 'react';
import { Categories, Sort, PizzaBlock } from '../components';

function Home() {

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
            <PizzaBlock />
        </div>
    )
}

export default Home;
