import React from 'react'

function RemovePopup({ onDeleteShowPopup, onRemovePizzaFromCart }) {

    const onSuccessDeletePizza = () => {
        onDeleteShowPopup();
        onRemovePizzaFromCart();
    }

    return (
        <div className="popup__body">
            <span className="popup__text">Вы действительно хотите удалить Пиццу?</span>
            <div className="popup__buttons">
                <button onClick={onDeleteShowPopup} className="button">Нет</button>
                <button onClick={onSuccessDeletePizza} className="button">Да</button>
            </div>
        </div>
    )
}

export default RemovePopup
