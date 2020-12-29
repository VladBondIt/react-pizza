import React, { useEffect } from 'react';
import TypeLists from './TypeLists';
import SizeLists from './SizeLists';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPizzas } from '../redux/actions/pizzas';
import Loader from './Loader';
// import PropTypes from 'prop-types';

function PizzaBlock() {

    const { items, isLoaded, category } = useSelector(({ pizzas, filters }) => {
        return {
            items: pizzas.items,
            isLoaded: pizzas.isLoaded,
            category: filters.category,
        }
    });


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPizzas(category));
    }, [dispatch, category])


    const pizzaItems = items.map((item) => {

        const { imageUrl, name, types, price, sizes, id } = item;

        return (
            <div
                key={id + (Math.random() * 10)}
                className="pizza-block">
                <img
                    className="pizza-block__image"
                    src={imageUrl}
                    alt={name}
                />
                <h4 className="pizza-block__title">{name}</h4>
                <div className="pizza-block__selector">
                    <ul>
                        <TypeLists types={types} />
                    </ul>
                    <ul>
                        <SizeLists sizes={sizes} />
                    </ul>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">{price}<svg className="ruble-svg"><use xlinkHref="#ruble" /></svg>  </div>
                    <div className="button button--outline button--add">
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg>
                        <span>Добавить</span>
                        <i>2</i>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="content__items">
            {isLoaded ? pizzaItems : Array(8).fill(<Loader />).map(x => <Loader key={(Math.random() * 10)} />)}
        </div>
    )
}

// PizzaBlock.propTypes = {
//     name: PropTypes.string.isRequired,
// }

export default PizzaBlock;
