import React from 'react'

function SizeLists({ sizes }) {
    const availabaleSizes = [26, 30, 40];

    const [activeSize, setActiveSize] = React.useState(null);


    const onSelectSize = (i) => {
        setActiveSize(i);
    }

    const pizzaSize = availabaleSizes.map((size, i) => {
        let SizeClassName = activeSize === i ? 'active' : '';

        return (
            <li onClick={() => onSelectSize(i)} className={SizeClassName} > {size}</li >
        )
    });
    return (
        <>
            {pizzaSize}
        </>
    )
}

export default SizeLists;
