import React from 'react';
import { useDispatch } from 'react-redux';

function ClearPopup({ clearCart, onClearShowPopup }) {
    const dispatch = useDispatch();

    const onClearCart = () => {
        dispatch(clearCart())
    }
    return (
        <div className="popup__body">
            <span className="popup__text">Вы действительно хотите очистить Корзину?</span>
            <div className="popup__buttons">
                <button onClick={onClearShowPopup} className="button">Нет</button>
                <button onClick={onClearCart} className="button">Да</button>
            </div>
        </div>
    )
}

export default ClearPopup
