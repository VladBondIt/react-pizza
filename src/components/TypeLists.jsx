import React from 'react';


function TypeLists({ types }) {

    const [activeType, setActiveType] = React.useState(0);

    const onSelectType = (i) => {
        setActiveType(i);
    }

    const typesPizza = types.map((type, i) => {
        const textType = type === 0 ? 'тонкое' : 'традиционное';
        const TypeClassName = activeType === i ? 'active' : '';
        return (
            <li onClick={() => onSelectType(i)} className={TypeClassName} > {textType}</li >
        )
    });

    return (
        <>
            {typesPizza}
        </>
    )
}

export default TypeLists;