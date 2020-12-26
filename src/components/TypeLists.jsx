import React from 'react';


function TypeLists({ types }) {
    const availabaleTypes = ['тонкое', 'традиционное']

    const [activeType, setActiveType] = React.useState(types[0]);

    const onSelectType = (i) => {
        setActiveType(i);
    }

    const typesPizza = availabaleTypes.map((type, i) => {
        let TypeClassName = !types.includes(i) ? 'disabled' : '';
        TypeClassName += activeType === i ? ' active' : '';
        return (
            <li
                key={i + (Math.random() * 10)}
                onClick={() => onSelectType(i)}
                className={TypeClassName} > {type}</li >
        )
    });

    return (
        <>
            {typesPizza}
        </>
    )
}

export default TypeLists;