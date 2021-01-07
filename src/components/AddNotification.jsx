import React from 'react';
import { deleteNotificationItem } from '../redux/actions/cart';
import { useDispatch } from 'react-redux';

function AddNotification({ name, sizeForCart, typeForCart, notif }) {
    const dispatch = useDispatch();

    console.log(notif);


    const notificationTimeout = () => {
        setTimeout(() => {
            dispatch(deleteNotificationItem())
        }, 5000);
    }

    React.useEffect(() => {
        if (notif.length > 0) {
            notificationTimeout();
        }
    }, [notif.length])


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
