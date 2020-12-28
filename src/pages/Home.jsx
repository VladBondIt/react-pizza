import React, { useMemo, useCallback } from 'react';
import { Categories, Sort, PizzaBlock } from '../components';

import { useDispatch } from 'react-redux';
import { setCategory } from '../redux/actions/filters';

const categoryesName = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

function Home() {

    const dispatch = useDispatch();

    const onSetCategory = useCallback((i) => {
        console.log(i);
        dispatch(setCategory(i))
    }, []);

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={categoryesName}
                    onSetCategory={onSetCategory} />
                <Sort />
            </div>

            <h2 className="content__title">Все пиццы</h2>
            <PizzaBlock />
        </div>
    )
}

export default Home;
