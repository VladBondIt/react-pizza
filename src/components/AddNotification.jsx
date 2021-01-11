import React from 'react';
import { Link } from 'react-router-dom';


function AddNotification({ name, sizeForCart, typeForCart }) {

    return (
        <li className="notification__list-item">
            <Link to="/cart">
                <span>Добавлено в корзину:</span>
                <span className="notification__name">{name},</span>
                <span className="notification__type">{typeForCart},</span>
                <span className="notification__size">{sizeForCart} см</span>
            </Link>
        </li>

    )
}

export default AddNotification
