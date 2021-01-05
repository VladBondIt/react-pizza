import React from 'react';
// import PropTypes from 'prop-types';

function PizzaBlock({ imageUrl, name, types, price, sizes, id, onClickAddPizza, addedCount }) {

    const availableTypes = ['тонкое', 'традиционное'];
    const availableSizes = [26, 30, 40];

    const [activeType, setActiveType] = React.useState(types[0]);
    const [activeSize, setActiveSize] = React.useState(!sizes.includes(availableSizes[0]) ? 1 : 0);

    const onSelectType = (i) => {
        setActiveType(i);
    }

    const onSelectSize = (i) => {
        setActiveSize(i);
    }


    const onAddPizza = () => {
        const obj = {
            id,
            name,
            imageUrl,
            price,
            size: availableSizes[activeSize],
            type: availableTypes[activeType],
        };
        onClickAddPizza(obj);
    };

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
                    {availableTypes.map((type, i) => {
                        let TypeClassName = !types.includes(i) ? 'disabled' : '';
                        TypeClassName += activeType === i ? ' active' : '';
                        return (
                            <li
                                key={i + (Math.random() * 10)}
                                onClick={() => {
                                    onSelectType(i)
                                }}
                                className={TypeClassName} > {type}</li >
                        )
                    })}
                </ul>
                <ul>
                    {availableSizes.map((size, i) => {
                        let SizeClassName = !sizes.includes(size) ? 'disabled' : '';
                        SizeClassName += activeSize === i && SizeClassName !== 'disabled' ? ' active' : '';
                        return (
                            <li
                                key={i + (Math.random() * 10)}
                                onClick={() => {
                                    onSelectSize(i)
                                }}
                                className={SizeClassName} >{size} см</li >
                        )
                    })}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">{price}<svg className="ruble-svg"><use xlinkHref="#ruble" /></svg>  </div>
                <button
                    onClick={onAddPizza}
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
                    {addedCount && <i>{addedCount}</i>}
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
