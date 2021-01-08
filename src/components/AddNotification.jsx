import React from 'react';

function AddNotification({ name, sizeForCart, typeForCart }) {

    return (
        <li className="notification__list-item">
            Добавлено в корзину:
            <span className="notification__name">{name}</span>
            ,<span className="notification__type">{typeForCart}</span>
            ,<span className="notification__size">{sizeForCart} см</span>
        </li>

    )
}

export default AddNotification
