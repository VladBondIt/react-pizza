import React, { useState } from 'react';
import { addPizzaToCart, setNotificationItems, deleteNotificationItem } from '../redux/actions/cart';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';

function PizzaBlock({ imageUrl, name, types, price, sizes, id }) {
    const dispatch = useDispatch();

    const availabaleTypes = ['тонкое', 'традиционное'];
    const availabaleSizes = [26, 30, 40];

    const [activeType, setActiveType] = useState(types[0]);
    const [activeSize, setActiveSize] = useState(!sizes.includes(availabaleSizes[0]) ? 1 : 0);
    const [calcedPrice, setPrice] = useState(price);

    const typeForCart = availabaleTypes[activeType];
    const sizeForCart = availabaleSizes[activeSize];

    const notificationTimeout = () => {
        setTimeout(() => {
            dispatch(deleteNotificationItem())
        }, 4000);
    }

    const onSelectType = (i, type) => {
        setActiveType(i);
        setActiveSize(0);
        if (type === 'традиционное') {
            setPrice(price + 18)
        } else {
            setPrice(price)
        }
    }

    const onSelectSize = (i) => {
        setActiveSize(i);
    }

    const onAddPizzaToCart = ({ ...obj }) => {
        const { name, typeForCart, sizeForCart } = obj;
        dispatch(addPizzaToCart(obj));
        dispatch(setNotificationItems({ name, typeForCart, sizeForCart }));
        notificationTimeout();
    }


    const onCalcPriceBySize = (size) => {
        setPrice(price);
        if (activeType === 0) {
            switch (size) {
                case 26:
                    setPrice(price)
                    break;
                case 30:
                    setPrice(price + 21)
                    break;
                case 40:
                    setPrice(price + 29)
                    break;
                default:
                    break;
            }
        } else {
            switch (size) {
                case 26:
                    setPrice(price + 18)
                    break;
                case 30:
                    setPrice(price + 37)
                    break;
                case 40:
                    setPrice(price + 48)
                    break;
                default:
                    break;
            }
        }

    }


    return (
        <div
            className='pizza-block'
            key={id + (Math.random() * 10)}>
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt={name}
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {availabaleTypes.map((type, i) => {
                        let TypeClassName = !types.includes(i) ? 'disabled' : '';
                        TypeClassName += activeType === i ? ' active' : '';
                        return (
                            <li
                                key={i + (Math.random() * 10)}
                                onClick={() => {
                                    onSelectType(i, type);
                                }}
                                className={TypeClassName} > {type}</li >
                        )
                    })}
                </ul>
                <ul>
                    {availabaleSizes.map((size, i) => {
                        let SizeClassName = !sizes.includes(size) ? 'disabled' : '';
                        SizeClassName += activeSize === i && SizeClassName !== 'disabled' ? ' active' : '';
                        return (
                            <li
                                key={i + (Math.random() * 10)}
                                onClick={() => {
                                    onSelectSize(i);
                                    onCalcPriceBySize(size);
                                }}
                                className={SizeClassName} >{size} см</li >
                        )
                    })}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">
                    {calcedPrice}
                    <svg className="ruble-svg"><use xlinkHref="#ruble" /></svg>
                </div>
                <button
                    onClick={() => {
                        onAddPizzaToCart({
                            id,
                            name,
                            imageUrl,
                            calcedPrice,
                            typeForCart,
                            sizeForCart
                        });
                    }}
                    className="button button--outline button--add">
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
                </button>
            </div>
        </div >
    );
}

// PizzaBlock.propTypes = {
//     name: PropTypes.string.isRequired,
// }

export default PizzaBlock;

// {isLoaded ? pizzaItems :  />)}
